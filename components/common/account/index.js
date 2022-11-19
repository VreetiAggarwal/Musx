import Card from "../banner/Card";
import classes from "./Account.module.css";
import Web3 from "web3";
import { useState, useEffect } from "react";

function Acc() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const loadProvider = async () => {
      let provider = null;

      if (window.ethereum) {
        provider = window.ethereum;

        try {
          await provider.enable();
        } catch {
          console.error("User denied account access!");
        }
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else if (!process.env.production) {
        provider = new Web3.providers.HttpProvider("http://localhost:7575");
      }

      setWeb3Api({
        web3: new Web3(provider),
        provider,
      });
    };

    loadProvider();
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  return (
    <div>
      <div className = {classes.img}>
      <div className={classes.plan}>You Choose Plan </div>
      <div className={classes.acc}>
        <h1 className={classes.acc}>
          Account: {account ? account : "not connected"}
        </h1>
      </div>
      <div className={classes.trans}>
        <button className={classes.btn}>Buy</button>
        <button className={classes.btn}>Donate</button>
      </div>
      </div>
    </div>
  );
}

export default Acc;
