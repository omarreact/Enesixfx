export default function Liquidity() {
  return (
    <section id={"liquidity-section"}>
      <div className={"liquidity-intro section-intro"}>
        <span className={"badge liquidity-badge"}>
          <img src={"./images/icons/liquidity.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Prime Liquidity"}
        </span>
        <h2 className={"liquidity-heading heading-gradient"}>{"Deep Liquidity. Direct Access"}</h2>
        <p className={"liquidity-sub"}>{"Capitalize on every opportunity with the world's most popular assets."}</p>
      </div>
      <div className={"liquidity-table gradient-border"}>
        <span className={"gradient-border__fill"}></span>
        <span className={"liquidity-table__glow"}></span>
        <span className={"border-shadow"}>
          <span className={"border-shadow__glow"}></span>
        </span>
        <span className={"border-shadow__line"}></span>
        <span className={"border-shadow border-shadow--bottom"}>
          <span className={"border-shadow__glow"}></span>
        </span>
        <span className={"border-shadow__line border-shadow__line--bottom"}></span>
        <div className={"liquidity-head"}>
          <span className={"liquidity-head__label"}>{"Instruments"}</span>
          <span className={"liquidity-head__label"}>{"Leverage"}</span>
          <span className={"liquidity-head__label"}>{"Avg. spread (pips)"}</span>
          <span className={"liquidity-head__label"}>{"Status"}</span>
          <span className={"liquidity-head__label"}></span>
        </div>
        <div className={"liquidity-row"} data-category={"Forex"}>
          <div className={"liquidity-instrument"}>
            <span className={"liquidity-instrument__icon"}>
              <img src={"./images/icons/coins/eurusd.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
            </span>
            <span className={"liquidity-instrument__text"}>
              <span className={"liquidity-instrument__ticker"}>{"EURUSD"}</span>
              <span className={"liquidity-instrument__desc"}>{"Euro vs US Dollar"}</span>
            </span>
          </div>
          <span className={"liquidity-value"}>{"1:500"}</span>
          <span className={"liquidity-value"}>{"0.6"}</span>
          <span className={"liquidity-status"}>
            <span className={"liquidity-status__dot"}></span>{"Online"}
          </span>
          <a className={"liquidity-category"} href={"#liquidity-section"}>{"Forex"}
            <svg viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </svg>
          </a>
        </div>
        <div className={"liquidity-row"} data-category={"Metals"}>
          <div className={"liquidity-instrument"}>
            <span className={"liquidity-instrument__icon"}>
              <img src={"./images/icons/coins/xauusd.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
            </span>
            <span className={"liquidity-instrument__text"}>
              <span className={"liquidity-instrument__ticker"}>{"XAUUSD"}</span>
              <span className={"liquidity-instrument__desc"}>{"Gold vs US Dollar"}</span>
            </span>
          </div>
          <span className={"liquidity-value"}>{"1:400"}</span>
          <span className={"liquidity-value"}>{"0.9"}</span>
          <span className={"liquidity-status"}>
            <span className={"liquidity-status__dot"}></span>{"Online"}
          </span>
          <a className={"liquidity-category"} href={"#liquidity-section"}>{"Metals"}
            <svg viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </svg>
          </a>
        </div>
        <div className={"liquidity-row"} data-category={"Crypto"}>
          <div className={"liquidity-instrument"}>
            <span className={"liquidity-instrument__icon"}>
              <img src={"./images/icons/coins/btcusd.png"} alt={""} aria-hidden={"true"} loading={"lazy"} />
            </span>
            <span className={"liquidity-instrument__text"}>
              <span className={"liquidity-instrument__ticker"}>{"BTCUSD"}</span>
              <span className={"liquidity-instrument__desc"}>{"Bitcoin vs US Dollar"}</span>
            </span>
          </div>
          <span className={"liquidity-value"}>{"1:200"}</span>
          <span className={"liquidity-value"}>{"1.8"}</span>
          <span className={"liquidity-status"}>
            <span className={"liquidity-status__dot"}></span>{"Online"}
          </span>
          <a className={"liquidity-category"} href={"#liquidity-section"}>{"Crypto"}
            <svg viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </svg>
          </a>
        </div>
        <div className={"liquidity-row"} data-category={"Indexes"}>
          <div className={"liquidity-instrument"}>
            <span className={"liquidity-instrument__icon"}>
              <img src={"./images/icons/coins/us30.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
            </span>
            <span className={"liquidity-instrument__text"}>
              <span className={"liquidity-instrument__ticker"}>{"US30"}</span>
              <span className={"liquidity-instrument__desc"}>{"Dow Jones Industrial"}</span>
            </span>
          </div>
          <span className={"liquidity-value"}>{"1:200"}</span>
          <span className={"liquidity-value"}>{"1.6"}</span>
          <span className={"liquidity-status"}>
            <span className={"liquidity-status__dot"}></span>{"Online"}
          </span>
          <a className={"liquidity-category"} href={"#liquidity-section"}>{"Indexes"}
            <svg viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </svg>
          </a>
        </div>
        <div className={"liquidity-row"} data-category={"Stocks"}>
          <div className={"liquidity-instrument"}>
            <span className={"liquidity-instrument__icon"}>
              <img src={"./images/icons/coins/aapl.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
            </span>
            <span className={"liquidity-instrument__text"}>
              <span className={"liquidity-instrument__ticker"}>{"AAPL"}</span>
              <span className={"liquidity-instrument__desc"}>{"Apple Inc."}</span>
            </span>
          </div>
          <span className={"liquidity-value"}>{"1:20"}</span>
          <span className={"liquidity-value"}>{"0.15"}</span>
          <span className={"liquidity-status"}>
            <span className={"liquidity-status__dot"}></span>{"Online"}
          </span>
          <a className={"liquidity-category"} href={"#liquidity-section"}>{"Stocks"}
            <svg viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </svg>
          </a>
        </div>
        <div className={"liquidity-row"} data-category={"Energies"}>
          <div className={"liquidity-instrument"}>
            <span className={"liquidity-instrument__icon"}>
              <img src={"./images/icons/coins/usoil.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
            </span>
            <span className={"liquidity-instrument__text"}>
              <span className={"liquidity-instrument__ticker"}>{"USOIL"}</span>
              <span className={"liquidity-instrument__desc"}>{"US Crude Oil"}</span>
            </span>
          </div>
          <span className={"liquidity-value"}>{"1:400"}</span>
          <span className={"liquidity-value"}>{"1.2"}</span>
          <span className={"liquidity-status"}>
            <span className={"liquidity-status__dot"}></span>{"Online"}
          </span>
          <a className={"liquidity-category"} href={"#liquidity-section"}>{"Energies"}
            <svg viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
            </svg>
          </a>
        </div>
      </div>
      <p className={"liquidity-note"}>{"Spreads may vary or widen due to market volatility, news, economic events, market hours, and instrument type."}</p>
    </section>
  );
}
