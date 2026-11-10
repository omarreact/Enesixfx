export default function Hero() {
  return (
    <section id={"hero-section"}>
      <div className={"hero-glow"} aria-hidden={"true"}>
        <img className={"hero-glow__img"} src={"./images/glow_ellipse.svg"} alt={""} />
        <img className={"hero-glow__img hero-glow__img--lg"} src={"./images/glow_ellipse.svg"} alt={""} />
      </div>
      <div className={"hero-dashboard-pin"}>
        <div className={"hero-dashboard"}>
          <div className={"hero-bottom__highlight"} aria-hidden={"true"}>
            <div className={"hero-bottom__highlight-glow"}></div>
          </div>
          <span className={"border-shadow"}>
            <span className={"border-shadow__glow"}></span>
          </span>
          <picture className={"hero-dashboard__picture"}>
            <source media={"(orientation: portrait)"} srcSet={"./images/mobile_dashboard_home_v2.webp"} width={"851"} height={"1538"} />
            <img className="hero-dashboard__img" src="./images/home_dashboard_v2.webp" alt="Genesis FX dashboard" width={1738} height={910} fetchPriority="high" />
          </picture>
        </div>
      </div>
      <div className={"hero-content"}>
        <a href={"#demo"} className={"badge hero-content__badge"} data-demo={"Try a DEMO for free"} aria-haspopup={"dialog"}>
          <img src={"./images/icons/ray.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Try a DEMO for free"}
        </a>
        <h1 className={"hero-content__title heading-gradient"}>{"Trading Reimagined"}</h1>
        <p className={"hero-content__subtitle"}>{"Raw Spreads From 0.9 Pips"}</p>
        <p className={"hero-content__desc"}>{"Deep, unfiltered pricing with ultra-low commissions powered by a seamless trading ecosystem."}</p>
        <a href={"#demo"} className={"btn glow-btn"} data-demo={"Open Account"} aria-haspopup={"dialog"}>
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
          <img src={"./images/icons/open_account.svg"} alt={""} aria-hidden={"true"} />
          <span className={"glow-btn__label"}>{"Open Account"}</span>
        </a>
      </div>
      <section id={"stats-section"}>
        <div className={"stats-wrap"}>
          <div className={"stats-intro section-intro"}>
            <span className={"badge stats-badge"}>
              <img src={"./images/icons/figures_icons/performance.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Transparent Performance Metrics"}
            </span>
            <h2 className={"stats-heading heading-gradient"}>{"Statistics that"}
              <br />{"Outperform."}
            </h2>
            <p className={"stats-sub"}>{"Data for the GenesisFX Markets Group,"}
              <br />{"correct as of Jan 1st, 2026."}
            </p>
            <div className={"stats-actions"}>
              <a href={"#demo"} className={"btn glow-btn"} data-demo={"Open Account"} aria-haspopup={"dialog"}>
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
                <img src={"./images/icons/open_account.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
                <span className={"glow-btn__label"}>{"Open Account"}</span>
              </a>
              <a className={"btn btn-dark"} href={"#about"} data-preview={"about"} aria-haspopup={"dialog"}>
                <span className={"btn__fill"} aria-hidden={"true"}></span>
                <span className={"btn__label"}>{"Learn More"}</span>
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
              </a>
            </div>
          </div>
          <ul className={"metrics"}>
            <li className={"metric"}>
              <span className={"metric__icon"}>
                <img src={"./images/icons/figures_icons/user_rounded.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <span className={"metric__value heading-gradient"}>{"70K+"}</span>
              <span className={"metric__label"}>{"Active Traders"}</span>
            </li>
            <li className={"metric"}>
              <span className={"metric__icon"}>
                <img src={"./images/icons/figures_icons/dollar_minimalistic.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <span className={"metric__value heading-gradient"}>{"60B+"}</span>
              <span className={"metric__label"}>{"Monthly Volume"}</span>
            </li>
            <li className={"metric"}>
              <span className={"metric__icon"}>
                <img src={"./images/icons/figures_icons/code_scan.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <span className={"metric__value heading-gradient"}>{"450+"}</span>
              <span className={"metric__label"}>{"Instruments Available"}</span>
            </li>
            <li className={"metric"}>
              <span className={"metric__icon"}>
                <img src={"./images/icons/figures_icons/Key.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <span className={"metric__value heading-gradient"}>{"1:500"}</span>
              <span className={"metric__label"}>{"Leverage Access"}</span>
            </li>
            <li className={"metric"}>
              <span className={"metric__icon"}>
                <img src={"./images/icons/figures_icons/clock_circle.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <span className={"metric__value heading-gradient"}>{"2.5 HR"}</span>
              <span className={"metric__label"}>{"Avg. Withdrawal Time"}</span>
            </li>
          </ul>
        </div>
      </section>
      <section id={"gateway-section"}>
        <h2 className={"gateway-heading heading-gradient"}>{"Your Gateway to "}
          <br className={"br-mobile"} />{" Trading is"}
          <br className={"br-desktop"} />{" Just a "}
          <br className={"br-mobile"} />{" Click Away."}
        </h2>
        <div className={"gateway-grid"}>
          <div className={"gateway-col"}>
            <article className={"gateway-card gateway-card--green"}>
              <span className={"gateway-card__border clip-chamfer"}></span>
              <span className={"gateway-card__icon gateway-card__icon--app"}>
                <img src={"./images/icons/gateway_icons/genesis-app.webp"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <div className={"gateway-card__body"}>
                <h3 className={"gateway-card__title"}>{"Genesis App"}</h3>
                <p className={"gateway-card__desc"}>{"Trade with a powerful, intuitive platform."}</p>
                <a href={"#coming-soon"} className={"btn btn-tint btn-tint-fill"} data-demo={"Coming Soon"} aria-haspopup={"dialog"}>
                  <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Coming Soon"}
                </a>
              </div>
            </article>
            <article className={"gateway-card gateway-card--green"}>
              <span className={"gateway-card__border clip-chamfer"}></span>
              <span className={"gateway-card__icon gateway-card__icon--dark"}>
                <img src={"./images/icons/gateway_icons/download.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <div className={"gateway-card__body"}>
                <h3 className={"gateway-card__title"}>{"TradeLocker"}</h3>
                <p className={"gateway-card__desc"}>{"Trade with a powerful, intuitive platform built for performance."}</p>
                <a className="btn btn-tint" href="#demo" data-demo="TradeLocker" aria-haspopup="dialog">
                  <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Trade Now"}
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
                </a>
              </div>
            </article>
            <article className={"gateway-card gateway-card--amber"}>
              <span className={"gateway-card__border clip-chamfer"}></span>
              <span className={"gateway-card__icon gateway-card__icon--amber"}>
                <img src={"./images/icons/gateway_icons/users-group.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <div className={"gateway-card__body"}>
                <h3 className={"gateway-card__title"}>{"10x Accounts"}</h3>
                <p className={"gateway-card__desc"}>{"Multiply your capital with our 10x leverage accounts."}</p>
                <a className={"btn btn-tint"} href={"#challenge-section"}>
                  <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Learn More"}
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
                </a>
              </div>
            </article>
          </div>
          <div className={"gateway-col"}>
            <article className={"gateway-card gateway-card--green"}>
              <span className={"gateway-card__border clip-chamfer"}></span>
              <span className={"gateway-card__icon gateway-card__icon--mt5"}>
                <img src={"./images/icons/gateway_icons/metatrader5.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <div className={"gateway-card__body"}>
                <h3 className={"gateway-card__title"}>{"MetaTrader 5"}</h3>
                <p className={"gateway-card__desc"}>{"The industry-standard platform, with Genesis pricing behind it."}</p>
                <a href={"#coming-soon"} className={"btn btn-tint btn-tint-fill"} data-demo={"Coming Soon"} aria-haspopup={"dialog"}>
                  <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Coming Soon"}
                </a>
              </div>
            </article>
            <article className={"gateway-card gateway-card--blue"}>
              <span className={"gateway-card__border clip-chamfer"}></span>
              <span className={"gateway-card__icon gateway-card__icon--blue"}>
                <img src={"./images/icons/gateway_icons/widget-add.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <div className={"gateway-card__body"}>
                <h3 className={"gateway-card__title"}>{"GenSocial"}</h3>
                <p className={"gateway-card__desc"}>{"Follow proven Genesis traders and copy their trades instantly."}</p>
                <a className={"btn btn-tint"} href={"#genesis-social-section"}>
                  <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Try Now"}
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
                </a>
              </div>
            </article>
            <article className={"gateway-card gateway-card--green"}>
              <span className={"gateway-card__border clip-chamfer"}></span>
              <span className={"gateway-card__icon gateway-card__icon--edu"}>
                <img src={"./images/icons/gateway_icons/notebook.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
              </span>
              <div className={"gateway-card__body"}>
                <h3 className={"gateway-card__title"}>{"Academy"}</h3>
                <p className={"gateway-card__desc"}>{"Master trading with expert courses and resources."}</p>
                <a className={"btn btn-tint btn-tint-fill"} href={"#education"} data-preview={"education"} aria-haspopup={"dialog"}>
                  <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Trade Now"}
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
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className={"gateway-carousel splide is-overflow is-initialized"} id={"splide03"}>
          <div className={"splide__track"} id={"splide03-track"}>
            <ul className={"splide__list"} id={"splide03-list"}>
              <li className={"splide__slide"} id={"splide03-slide01"}>
                <article className={"gateway-card gateway-card--green"}>
                  <span className={"gateway-card__border clip-chamfer"}></span>
                  <span className={"gateway-card__icon gateway-card__icon--app"}>
                    <img src={"./images/icons/gateway_icons/genesis-app.webp"} alt={""} aria-hidden={"true"} loading={"lazy"} />
                  </span>
                  <div className={"gateway-card__body"}>
                    <h3 className={"gateway-card__title"}>{"Genesis App"}</h3>
                    <p className={"gateway-card__desc"}>{"Trade with a powerful, intuitive platform."}</p>
                    <a href={"#coming-soon"} className={"btn btn-tint btn-tint-fill"} data-demo={"Coming Soon"} aria-haspopup={"dialog"}>
                      <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Coming Soon"}
                    </a>
                  </div>
                </article>
              </li>
              <li className={"splide__slide"} id={"splide03-slide02"}>
                <article className={"gateway-card gateway-card--green"}>
                  <span className={"gateway-card__border clip-chamfer"}></span>
                  <span className={"gateway-card__icon gateway-card__icon--dark"}>
                    <img src={"./images/icons/gateway_icons/download.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
                  </span>
                  <div className={"gateway-card__body"}>
                    <h3 className={"gateway-card__title"}>{"TradeLocker"}</h3>
                    <p className={"gateway-card__desc"}>{"Trade with a powerful, intuitive platform built for performance."}</p>
                    <a className="btn btn-tint" href="#demo" data-demo="TradeLocker" aria-haspopup="dialog">
                      <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Trade Now"}
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
                    </a>
                  </div>
                </article>
              </li>
              <li className={"splide__slide"} id={"splide03-slide03"}>
                <article className={"gateway-card gateway-card--amber"}>
                  <span className={"gateway-card__border clip-chamfer"}></span>
                  <span className={"gateway-card__icon gateway-card__icon--amber"}>
                    <img src={"./images/icons/gateway_icons/users-group.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
                  </span>
                  <div className={"gateway-card__body"}>
                    <h3 className={"gateway-card__title"}>{"10x Accounts"}</h3>
                    <p className={"gateway-card__desc"}>{"Multiply your capital with our 10x leverage accounts."}</p>
                    <a className={"btn btn-tint"} href={"#challenge-section"}>
                      <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Learn More"}
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
                    </a>
                  </div>
                </article>
              </li>
              <li className={"splide__slide"} id={"splide03-slide04"}>
                <article className={"gateway-card gateway-card--green"}>
                  <span className={"gateway-card__border clip-chamfer"}></span>
                  <span className={"gateway-card__icon gateway-card__icon--mt5"}>
                    <img src={"./images/icons/gateway_icons/metatrader5.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
                  </span>
                  <div className={"gateway-card__body"}>
                    <h3 className={"gateway-card__title"}>{"MetaTrader 5"}</h3>
                    <p className={"gateway-card__desc"}>{"The industry-standard platform, with Genesis pricing behind it."}</p>
                    <a href={"#coming-soon"} className={"btn btn-tint btn-tint-fill"} data-demo={"Coming Soon"} aria-haspopup={"dialog"}>
                      <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Coming Soon"}
                    </a>
                  </div>
                </article>
              </li>
              <li className={"splide__slide"} id={"splide03-slide05"}>
                <article className={"gateway-card gateway-card--blue"}>
                  <span className={"gateway-card__border clip-chamfer"}></span>
                  <span className={"gateway-card__icon gateway-card__icon--blue"}>
                    <img src={"./images/icons/gateway_icons/widget-add.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
                  </span>
                  <div className={"gateway-card__body"}>
                    <h3 className={"gateway-card__title"}>{"GenSocial"}</h3>
                    <p className={"gateway-card__desc"}>{"Follow proven Genesis traders and copy their trades instantly."}</p>
                    <a className={"btn btn-tint"} href={"#genesis-social-section"}>
                      <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Try Now"}
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
                    </a>
                  </div>
                </article>
              </li>
              <li className={"splide__slide"} id={"splide03-slide06"}>
                <article className={"gateway-card gateway-card--green"}>
                  <span className={"gateway-card__border clip-chamfer"}></span>
                  <span className={"gateway-card__icon gateway-card__icon--edu"}>
                    <img src={"./images/icons/gateway_icons/notebook.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
                  </span>
                  <div className={"gateway-card__body"}>
                    <h3 className={"gateway-card__title"}>{"Academy"}</h3>
                    <p className={"gateway-card__desc"}>{"Master trading with expert courses and resources."}</p>
                    <a className={"btn btn-tint btn-tint-fill"} href={"#education"} data-preview={"education"} aria-haspopup={"dialog"}>
                      <img className={"btn__glow-img"} src={"./images/icons/gateway_icons/btn-glow.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Trade Now"}
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
                    </a>
                  </div>
                </article>
              </li>
            </ul>
          </div>
          <div className={"gateway-carousel__footer"}>
            <div className={"carousel-progress"}>
              <div className={"carousel-progress__bar"}></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
