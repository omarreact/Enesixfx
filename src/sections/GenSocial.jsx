export default function GenSocial() {
  return (
    <section id={"genesis-social-section"}>
      <div className={"genesis-social__media"}>
        <div className={"genesis-social__image"} data-social-image={"0"} aria-hidden={"false"}>
          <div className={"genesis-social__highlight"} aria-hidden={"true"}>
            <div className={"genesis-social__highlight-glow"}></div>
          </div>
          <span className={"border-shadow"} aria-hidden={"true"}>
            <span className={"border-shadow__glow"}></span>
          </span>
          <img className={"genesis-social__screen"} src={"./assets/genesis_social_1-BV6Go8Yz.webp"} alt={"Genesis PAMM Accounts"} loading={"lazy"} />
        </div>
        <div className={"genesis-social__image"} data-social-image={"1"} aria-hidden={"true"}>
          <div className={"genesis-social__highlight"} aria-hidden={"true"}>
            <div className={"genesis-social__highlight-glow"}></div>
          </div>
          <span className={"border-shadow"} aria-hidden={"true"}>
            <span className={"border-shadow__glow"}></span>
          </span>
          <img className={"genesis-social__screen"} src={"./assets/genesis_social_2-BnOk79WQ.webp"} alt={"Genesis Copy Trading"} loading={"lazy"} />
        </div>
        <div className={"genesis-social__image"} data-social-image={"2"} aria-hidden={"true"}>
          <div className={"genesis-social__highlight"} aria-hidden={"true"}>
            <div className={"genesis-social__highlight-glow"}></div>
          </div>
          <span className={"border-shadow"} aria-hidden={"true"}>
            <span className={"border-shadow__glow"}></span>
          </span>
          <img className={"genesis-social__screen"} src={"./assets/genesis_social_3-CHG2nbhM.webp"} alt={"Genesis Trade Signals"} loading={"lazy"} />
        </div>
        <div className={"broker-showcase genesis-social__mobile-showcase"}>
          <div className={"broker-showcase__highlight"} aria-hidden={"true"}>
            <div className={"broker-showcase__highlight-glow"}></div>
          </div>
          <img src={"./images/genesis_social_mobile_v2.webp"} alt={"Genesis Social app"} loading={"lazy"} className={"broker-showcase__img genesis-social__mobile-img"} />
        </div>
      </div>
      <div className={"genesis-social__content"}>
        <div className={"section-intro"}>
          <h2 className={"genesis-social__heading heading-gradient"}>{"GenSocial"}</h2>
          <p className={"genesis-social__sub"}>{"Amplify your trading potential by connecting with a global community of elite traders."}</p>
        </div>
        <ul className={"genesis-social__features"}>
          <li className={"genesis-feature"} data-social-feature={"0"} tabIndex={"0"} role={"button"} aria-pressed={"true"}>
            <span className={"genesis-feature__bar"}></span>
            <div className={"genesis-feature__body"}>
              <h3 className={"genesis-feature__title"}>{"PAMM Accounts"}</h3>
              <p className={"genesis-feature__desc"}>{"Proportional trade allocation software enabling seamless strategy distribution and transparent portfolio tracking."}</p>
            </div>
          </li>
          <li className={"genesis-feature"} data-social-feature={"1"} tabIndex={"0"} role={"button"} aria-pressed={"false"}>
            <span className={"genesis-feature__bar"}></span>
            <div className={"genesis-feature__body"}>
              <h3 className={"genesis-feature__title"}>{"Copy Trading"}</h3>
              <p className={"genesis-feature__desc"}>{"Automatically mirror the exact strategies of top-performing global traders."}</p>
            </div>
          </li>
          <li className={"genesis-feature"} data-social-feature={"2"} tabIndex={"0"} role={"button"} aria-pressed={"false"}>
            <span className={"genesis-feature__bar"}></span>
            <div className={"genesis-feature__body"}>
              <h3 className={"genesis-feature__title"}>{"Trade Signals"}</h3>
              <p className={"genesis-feature__desc"}>{"Make informed market moves with real-time, data-driven alerts."}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
