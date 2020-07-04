import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head'

const features = [
  // {
  //   title: <>Easy to Use</>,
  //   imageUrl: 'img/undraw_docusaurus_mountain.svg',
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  // {
  //   title: <>Focus on What Matters</>,
  //   imageUrl: 'img/undraw_docusaurus_tree.svg',
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: <>Powered by React</>,
  //   imageUrl: 'img/undraw_docusaurus_react.svg',
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const Monetize = () => (
  <>
    <Head>
      <meta name="monetization" content="fullcycle@moneybutton.com" />
    </Head>
  </>
);

const MoneyStream = () => (
  <div className="productShowcaseSection paddingBottom">
    <div style={{textAlign: "left"}}>
      <h2>MoneyStream is Bitcoin. Global. Instant. <span style={{color:"green"}}>Streamable</span>. Cash.</h2>
      <div>&#x276F; The internet is a streaming medium. 
        MoneyStream is <b>streamable money</b> for the streaming web.</div>
      <div>&#x276F; Use MoneyStream when you don't know how long you will be browsing content. 
        Examples of such sessions can be: watching videos, gaming, or interacting with any content 
        including simply reading a web page. MoneyStream monetizes virtually all most common 
        browser sessions. You only pay for what you use.</div>
      <div>&#x276F; MoneyStream pays websites to remove ads from a browsing session.</div>
      <div>&#x276F; MoneyStream pays content creators and platforms for access to streamable content 
        using a pay-as-you-go model. There are no burdensome subscriptions to maintain. 
        The user always controls the funds in their wallet.</div>
      {/* <div>&#x276F; The user streams cash from their MoneyStream wallet to the website. 
        Each send of cash from the wallet may be the last, since the user may lose the connection 
        or may close their browser or become inaccessible for any reason.</div>
      <div>&#x276F; Therefore, the web site needs assurance that any transaction received from 
        the user wallet must be spendable without further action from the user. 
        After a certain period of inactivity the web site can broadcast the last known 
        good cash transaction in order to get paid for the session.</div> */}
      <div>&#x276F; MoneyStream pays for a clean content stream free from tracking ads 
        and extraneous noise.</div>
      <div>&#x276F; MoneyStream allows content platforms to be created easily. <b>One line of HTML code can enable monetization on your web site</b>.</div>
      <div>&#x276F; MoneyStream provides an opportunity for everyone to earn bitcoin from 
        streaming web content. No contracts. No minimum to receive a payout.
        No delays. No subscriptions. Spend cash. Receive cash.</div>
      <div>&#x276F; Each MoneyStream monetized browser session settles to 
        one transaction on the bitcoin ledger.</div>
      <div>&#x276F; 5 billion current web users on the planet engaged in 200 monetized sessions per day 
        equates to 1 trillion potential transactions per day using MoneyStream</div>
      {/* <div>* MoneyStream is an implementation of the proposed Web Monetization standard on BitcoinSV</div> */}

      {/* <h2>The MoneyStream Service Provider model</h2>
      <div>* A MoneyStream session ought to be managed by the web site receiving the stream. Without stream management the site user might receive content and then simply not pay at the end of the session.</div>
      <div>* The web site could manage the stream themselves, but more likely will opt to direct the MoneyStream to a service provider to manage the stream and interact with the bitcoin network.</div>
      <div>* Service Providers will complete for business from the web sites</div>
      <div>* The service provider can charge a service fee according to whatever agreement they have with the web site</div>
      <div>* Each time the user sends a transaction to the service provider they get a receipt for cash. The user provides the web site the receipt during the monetization flow.</div>
      <div>* Using the receipt for cash, the web site may query the service provider to validate that the active user continues to streaming money to the site wallet.</div> */}
      {/* <div>* The service provider may provide enhanced services for the web site or different tiers of service depending on the unique needs of each site vendor.</div> */}

      <h1>How does MoneyStream implement the BSV hackathon theme for a global "record of events"?</h1>  
      <div>&#x276F; MoneyStream is a monetizer. MoneyStream monetizes browser events for a global internet population. 
        MoneyStream measures an exchange of value, captures the browser events and records them onto 
        bitcoin at the end of each browser session. </div>
      <div>&#x276F; Bitcoin miners, enforcing the bitcoin protocol, protect web merchants from double spend attempts, providing merchants 
        a safe operating environment to stream content to anyone in the world in exchange for immediate cash. The web content 
        provider is assured of immediate spendable cash received at the end of the user browser session.</div>
      <div>&#x276F; The bitcoin protocol provides for safe and honest realtime exchange of value.</div>
      <div>&#x276F; A transaction id is a globally unique pointer to the record of events and acts as a receipt 
        for cash payments that can be accepted by any vendor. Vendors can verify cash 
        payment from anyone anywhere in the world. Instantly.</div>
      <div>&#x276F; Bitcoin scales to the size of a global population. It handles cash payments 
        for the entire web. Safely and efficiently.</div>
      <div>&#x276F; MoneyStream proves that the original and restored bitcoin is 
        instant safe global electronic cash for everyone in the world.</div>
      <div>&#x276F; Instant cash payments allow for frictionless global trade on the streaming web.</div>

      </div>
  </div>
);

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <Monetize />
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header> */}
      <main>
        <div className="container">
          <div className={clsx('hero hero--secondary', styles.heroBanner)}>
          <MoneyStream />
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
