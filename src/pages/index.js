import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head'

const features = [
  {
    title: <>Learn about MoneyStream</>,
    description: (
      <div className="text--center">
      <iframe width="460" height="315" 
        src="https://www.youtube.com/embed/fd5zHcjiFD8" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      </div>
      ),
  },
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
  {
    title: <>Easy MoneyStream Web Components</>,
    imageUrl: 'img/webcomponents.png',
    description: (
      <>
        Charge for streaming content with pay-per-second media <a href="/moneystream-project/docs/webcomponents">Web Components</a>. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
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
    <div style={{textAlign: "left", paddingBottom:25}} className="paddingBottom">
      <div className="paddingBottom">
        <h2>MoneyStream is Bitcoin. Global. Instant. <span style={{color:"green"}}>Streamable</span>. Cash.</h2>
        <div>&#x276F; The internet is a streaming medium. 
          MoneyStream is <b>streamable money</b> for the streaming web.</div>
        <div>&#x276F; MoneyStream monetizes virtually all most common 
          browser sessions. You only pay for what you use. Use MoneyStream to  
          watch a video, play a web game or interact with any content 
          including simply reading a web page. </div>
        <div>&#x276F; MoneyStream pays websites to remove ads from a browsing session.</div>
        <div>&#x276F; MoneyStream pays content creators and platforms for access to streaming content 
          using a pay-as-you-go model. There are no burdensome subscriptions to maintain. MoneyStream provides an alternative revenue model for websites and content creators without ads or subscriptions.  
          The user always controls the funds in their wallet.</div>
        <div>&#x276F; MoneyStream pays for a clean content stream free from tracking ads 
          and extraneous noise.</div>
        <div>&#x276F; MoneyStream allows content platforms to be created easily. <b>One line of HTML code can enable monetization on your web site</b>.</div>
        <div>&#x276F; MoneyStream provides an opportunity for everyone to earn instant cash from 
          streaming web content. No contracts. No minimum to receive a payout.
          No delays. Spend cash. Receive cash.</div>
        <div>&#x276F; Each MoneyStream monetized browser session settles to 
          one transaction on the bitcoin ledger.</div>

        {/* <h2>The MoneyStream Service Provider model</h2>
        <div>* A MoneyStream session ought to be managed by the web site receiving the stream. Without stream management the site user might receive content and then simply not pay at the end of the session.</div>
        <div>* The web site could manage the stream themselves, but more likely will opt to direct the MoneyStream to a service provider to manage the stream and interact with the bitcoin network.</div>
        <div>* Service Providers will complete for business from the web sites</div>
        <div>* The service provider can charge a service fee according to whatever agreement they have with the web site</div>
        <div>* The service provider may provide enhanced services for the web site or different tiers of service depending on the unique needs of each site vendor.</div> */}
      </div>
    </div>

    <div className="productShowcaseSection paddingBottom">
        <div style={{textAlign: "left", paddingBottom:25}}>
          <h2>How does MoneyStream make money?</h2>
          MoneyStream is a micropayments processor that earns a small percentage of each monetized browser session from the web site. 
        </div>
      </div>

      {/* <div className="productShowcaseSection paddingBottom">
        <div style={{textAlign: "left", paddingBottom:25}}>
          <h2>How does MoneyStream demostrate the BSV hackathon theme for a global "record of events"?</h2>  
          <div>&#x276F; MoneyStream is a monetizer. MoneyStream monetizes browser events for a global internet population. 
            MoneyStream measures an exchange of value, captures the browser events and records them onto 
            bitcoin at the end of each browser session. </div>
            <div>&#x276F; The bitcoin protocol provides for safe and honest realtime value exchange.</div>
          <div>&#x276F; Through enforcement of protocol, Bitcoin miners protect web merchants from double spend attempts, providing merchants 
            a safe operating environment to stream content to anyone in the world in exchange for immediate cash. The web merchant 
            is assured of instant spendable cash received at the end of the user browser session.</div>
          <div>&#x276F; A transaction id is a globally unique pointer to the record of events and acts as a receipt 
            for cash payments that can be accepted by any vendor. Vendors can verify cash 
            payment from anyone anywhere in the world. Instantly.</div>
          <div>&#x276F; Bitcoin scales to the size of a global population. It handles cash payments 
            for the entire web. Safely and efficiently.</div>
          <div>&#x276F; Instant cash payments allow for frictionless global trade on the streaming web.</div>
          <div>&#x276F; Users stream cash to content creators who respend streaming cash to other web sites in a rapid 
            virtuous cycle of circulating bitcoin tokens.</div>
        </div>
      </div> */}

      <div className="productShowcaseSection paddingBottom">
        <div style={{textAlign: "left", paddingBottom:5}}>
        <h2>MoneyStream Vision</h2>
        <p>
          Big Data analytics algorithms and Machine Learning require data sourced from
          human activities as inputs. Today, Big Tech harvests user data under the guise of 
          an advertising revenue model that tracks users across the internet.
          </p>
          <p>
          We imagine a new internet,
          recast in the image of bitcoin,
          where users own their browser sessions and other interactions with technology. 
          In the new internet, Big Tech will need to purchase
          data from the owner of that data - the users. In other words, Big Tech
          will be the paying customer of the 7 billion, a complete inversion of control
          from the way the current internet works.
          </p>
          <p>
          MoneyStream is building tools for 7 billion humans. It begins with users
          asserting ownership of their data by paying for their interactions
          with online content. It begins with MoneyStream.
          </p>
          </div>
      </div>

  </div>
);

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Streaming money for the streaming web">
        <Monetize />
      <main>
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
        <div className="container">
          <div className={clsx('hero hero--secondary', styles.heroBanner)}>
          <MoneyStream />
          </div>
        </div>
      </main>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
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
      </header>
    </Layout>
  );
}

export default Home;
