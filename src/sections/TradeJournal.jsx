export default function TradeJournal() {
  return (
    <section id={"broker-section"}>
      <div className={"broker__intro section-intro"}>
        <h2 className={"broker__heading heading-gradient"}>{"The Only Broker-"}
          <br />{"Backed Trade Journal"}
        </h2>
        <p className={"broker__sub"}>{"Auto-sync every trade, analyze with AI and access execution data no standalone journal can provide."}</p>
        <div className={"broker__actions"}>
          <a className={"btn glow-btn"} href={"#broker-section"}>
            <span className={"glow-btn__ring glow-btn__ring--r"} aria-hidden={"true"}>
              <span className={"glow-btn__edge"}></span>
            </span>
            <span className={"glow-btn__ring glow-btn__ring--l"} aria-hidden={"true"}>
              <span className={"glow-btn__edge"}></span>
            </span>
            <span className={"glow-btn__fill"} aria-hidden={"true"}></span>
            <span className={"glow-btn__clip"} aria-hidden={"true"}>
              <span className={"glow-btn__light"}>
                <span className={"glow-btn__core"}></span>
                <span className={"glow-btn__spread"}></span>
              </span>
            </span>
            <span className={"btn__icon"} aria-hidden={"true"}>
              <svg viewBox={"0 0 24 24"} fill={"none"}>
                <path d={"M5 12h14M13 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
              </svg>
            </span>
            <span className={"glow-btn__label"}>{"Explore Trade Journal"}</span>
          </a>
          <a href={"#demo"} className={"btn btn-ghost broker__cta-ghost"} data-demo={"Open Account"} aria-haspopup={"dialog"}>
            <span className={"sparkles"} aria-hidden={"true"}>
              <span className={"sparkle"}></span>
              <span className={"sparkle"}></span>
              <span className={"sparkle"}></span>
              <span className={"sparkle"}></span>
              <span className={"sparkle"}></span>
              <span className={"sparkle"}></span>
              <span className={"sparkle"}></span>
              <span className={"sparkle"}></span>
            </span>
            <span className={"btn__label"}>{"Open Account"}</span>
          </a>
        </div>
      </div>
      <div className={"broker-showcase"}>
        <div className={"broker-showcase__highlight"} aria-hidden={"true"}>
          <div className={"broker-showcase__highlight-glow"}></div>
        </div>
        <span className={"border-shadow"}>
          <span className={"border-shadow__glow"}></span>
        </span>
        <picture>
          <source media={"(orientation: portrait)"} srcSet={"./images/mobile_trade_journal_v2.webp"} width={"884"} height={"1460"} />
          <img className="broker-showcase__img" src="./images/journal_v2.webp" alt="Genesis FX trade journal overview" width={1740} height={912} loading="lazy" decoding="async" />
        </picture>
      </div>
      <div className={"broker-cards"}>
        <span className={"broker-cards__glow"} aria-hidden={"true"}></span>
        <span className={"broker-cards__glow"} aria-hidden={"true"}></span>
        <div className={"broker-cards__row"}>
          <article className={"broker-card"}>
            <span className={"broker-card__border"} aria-hidden={"true"}></span>
            <img className={"broker-card__bg"} src={"./assets/card_1-Bmo6jcMw.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} decoding={"async"} />
            <div className={"broker-card__text"}>
              <h3 className={"broker-card__title heading-gradient"}>{"Auto-Sync Trades"}</h3>
              <p className={"broker-card__desc"} style={{ maxWidth: "calc(var(--fs) * 32.56)" }}>{"Every trade imported automatically from your Genesis account via TradeLocker. Zero manual entry."}</p>
            </div>
          </article>
          <article className={"broker-card broker-card--featured"}>
            <span className={"broker-card__border"} aria-hidden={"true"}></span>
            <img className={"broker-card__bg"} src={"./assets/card_2-JVzZs4cs.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} decoding={"async"} />
            <div className={"broker-card__text"}>
              <h3 className={"broker-card__title heading-gradient"}>{"AI Pattern Recognition"}</h3>
              <p className={"broker-card__desc"} style={{ maxWidth: "calc(var(--fs) * 28.9375)" }}>{"Identify winning and losing patterns with AI-powered analysis tailored to your trading style."}</p>
            </div>
          </article>
        </div>
        <div className={"broker-cards__row"}>
          <article className={"broker-card"}>
            <span className={"broker-card__border"} aria-hidden={"true"}></span>
            <img className={"broker-card__bg"} src={"./assets/card_3-iB3Ir-mc.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} decoding={"async"} />
            <div className={"broker-card__text"}>
              <h3 className={"broker-card__title heading-gradient"}>{"Market Replay"}</h3>
              <p className={"broker-card__desc"} style={{ maxWidth: "calc(var(--fs) * 32.56)" }}>{"Replay market movements at 250ms tick accuracy to refine your entries and exits."}</p>
            </div>
          </article>
          <article className={"broker-card"}>
            <span className={"broker-card__border"} aria-hidden={"true"}></span>
            <img className={"broker-card__bg"} src={"./assets/card_4-B01gWgEd.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} decoding={"async"} />
            <div className={"broker-card__text"}>
              <h3 className={"broker-card__title heading-gradient"}>{"Advanced Statistics"}</h3>
              <p className={"broker-card__desc"} style={{ maxWidth: "calc(var(--fs) * 32.56)" }}>{"Deep-dive into win rate, expectancy, Sharpe ratio, and drawdown metrics across all your trades."}</p>
            </div>
          </article>
        </div>
      </div>
      <div className={"broker-carousel splide is-overflow is-initialized"} id={"splide02"}>
        <div className={"splide__track"} id={"splide02-track"}>
          <ul className={"splide__list"} id={"splide02-list"}>
            <li className={"splide__slide"} id={"splide02-slide01"}>
              <article className={"broker-card"}>
                <span className={"broker-card__border"} aria-hidden={"true"}></span>
                <img className={"broker-card__bg"} src={"./assets/card_1-Bmo6jcMw.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} decoding={"async"} />
                <div className={"broker-card__text"}>
                  <h3 className={"broker-card__title heading-gradient"}>{"Auto-Sync Trades"}</h3>
                  <p className={"broker-card__desc"} style={{ maxWidth: "calc(var(--fs) * 32.56)" }}>{"Every trade imported automatically from your Genesis account via TradeLocker. Zero manual entry."}</p>
                </div>
              </article>
            </li>
            <li className={"splide__slide"} id={"splide02-slide02"}>
              <article className={"broker-card broker-card--featured"}>
                <span className={"broker-card__border"} aria-hidden={"true"}></span>
                <img className={"broker-card__bg"} src={"./assets/card_2-JVzZs4cs.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} decoding={"async"} />
                <div className={"broker-card__text"}>
                  <h3 className={"broker-card__title heading-gradient"}>{"AI Pattern Recognition"}</h3>
                  <p className={"broker-card__desc"} style={{ maxWidth: "calc(var(--fs) * 28.9375)" }}>{"Identify winning and losing patterns with AI-powered analysis tailored to your trading style."}</p>
                </div>
              </article>
            </li>
            <li className={"splide__slide"} id={"splide02-slide03"}>
              <article className={"broker-card"}>
                <span className={"broker-card__border"} aria-hidden={"true"}></span>
                <img className={"broker-card__bg"} src={"./assets/card_3-iB3Ir-mc.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} decoding={"async"} />
                <div className={"broker-card__text"}>
                  <h3 className={"broker-card__title heading-gradient"}>{"Market Replay"}</h3>
                  <p className={"broker-card__desc"} style={{ maxWidth: "calc(var(--fs) * 32.56)" }}>{"Replay market movements at 250ms tick accuracy to refine your entries and exits."}</p>
                </div>
              </article>
            </li>
            <li className={"splide__slide"} id={"splide02-slide04"}>
              <article className={"broker-card"}>
                <span className={"broker-card__border"} aria-hidden={"true"}></span>
                <img className={"broker-card__bg"} src={"./assets/card_4-B01gWgEd.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} decoding={"async"} />
                <div className={"broker-card__text"}>
                  <h3 className={"broker-card__title heading-gradient"}>{"Advanced Statistics"}</h3>
                  <p className={"broker-card__desc"} style={{ maxWidth: "calc(var(--fs) * 32.56)" }}>{"Deep-dive into win rate, expectancy, Sharpe ratio, and drawdown metrics across all your trades."}</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
