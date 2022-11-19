import classes from "./Premium.module.css";
import Cardprem from "./Card";
import acc from "../account";

function Premium() {
  return (
    <div>
      <section className={classes.premium}>
        <div className={classes.name1}>
          <h1 className={classes.h1}>CONNECT WITH PREMIUM</h1>
          <h2 className={classes.h2}>
            Listen to unlimited music. Get access to exclusie contents!
          </h2>
          <button className={classes.button1}>Be a Premium member</button>
          <h6 className={classes.h6}>Terms and Conditions apply.</h6>
        </div>
        <div className={classes.name2}>
          <h1 className={classes.h1}>TRY FREE TRIAL FOR A MONTH!</h1>
          <h2 className={classes.h2}>
            Pay $ after a month trial. Cancel Anytime.
          </h2>
          <button className={classes.button}>Start Free Trial</button>
          <h6 className={classes.h6}>Terms and Conditions apply.</h6>
        </div>
        <div className={classes.features}>
          <h1 className={classes.h1}>WHY PREMIUM</h1>
          <div className={classes.flex}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={classes.icon}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>

              <div className={classes.title}>COIN SYSTEM</div>
              <div className={classes.desc}>
                Get coins on daily basis and further discounts on merchandise
                and a chance to meet Musxians!
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={classes.icon}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>

              <div className={classes.title}>DOWNLOAD SONGS</div>
              <div className={classes.desc}>
                Pre-order or buy the songs to download them and have access to
                them forever.
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={classes.icon}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>

              <div className={classes.title}>ACCESS PREMIUM SONGS</div>
              <div className={classes.desc}>
                Have unlimited access to the premium only songs categorized by
                the artist.
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={classes.icon}
              >
                <path
                  stroke-linecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <div className={classes.title}>CHANCE TO FANMEET</div>
              <div className={classes.desc}>
                Get a chance to facetime your favourite artists through random
                selection.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.plans}>
          <div>
            <h1 className={classes.h1}>Get Your Perfect Premmium Plan</h1>
          </div>
          <div className={classes.flex}>
            <span>
              <Cardprem
                title="MONTHLY Plan"
                point="Get monthly premium plan"
                bt="Go Premium"
              />
            </span>
            <span>
              <Cardprem
                title="YEARLY Plan"
                point="Get yearly premium plan"
                bt="Go Premium"
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Premium;
