import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple',
    Svg: require('@site/static/img/svg_simple.svg').default,
    description: (
      <>
        Run locally in a notebook
      </>
    ),
    description2: (
      <>
        Run deployed in a server
      </>
    ),
    description3: (
      <>
        Core API is 3 functions
      </>
    ),
  },
  {
    title: 'Feature Rich',
    Svg: require('@site/static/img/svg_feature.svg').default,
    description: (
      <>
        Embedding search
      </>
    ),
    description2: (
      <>
        Index deletion and filtering
      </>
    ),
    description3: (
      <>
        Advanced cluster analytics
      </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('@site/static/img/svg_fast.svg').default,
    description: (
      <>
        OLAP foundation
      </>
    ),
    description2: (
      <>
        Optimized for analytics
      </>
    ),
    description3: (
      <>
        Easily scalable
      </>
    ),
  },
  {
    title: 'Free',
    Svg: require('@site/static/img/svg_free.svg').default,
    description: (
      <>
        Free & Open Source
      </>
    ),
    description2: (
      <>
        Apache 2.0 License
      </>
    ),
    description3: (
      <>
        By MLEs, for MLEs
      </>
    ),
  },
];

function Feature({ Svg, title, description, description2, description3 }) {
  return (
    <div className={clsx('col col--6')} style={{ marginBottom: "15px" }}>
      <div className='row'>
        <div className='col col--3' style={{ padding: "0" }}>
          <div className="homepage-svg" style={{}}>
            <Svg className={styles.featureSvg} role="img" />
          </div>
        </div>
        <div className='col col--9' style={{ padding: "0" }}>
          <div className="padding-horiz--md">
            <h3 style={{ marginBottom: "5px" }}>{title}</h3>
            <p style={{ marginRight: "40px" }}>
              <ul style={{ marginLeft: "-17px" }}>
                <li>{description}</li>
                <li>{description2}</li>
                <li>{description3}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="hero--container-small ">
        <div className="row" style={{ marginBottom: "30px" }}>
          <h2>Why AnythingLLM?</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div id='installation'></div>
        {/* this is a hack to get the id jump to offset the header */}
      </div>
    </section>
  );
}
