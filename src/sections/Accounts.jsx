export default function Accounts() {
  return (
    <section id={"accounts-section"}>
      <div className={"accounts-intro section-intro"}>
        <span className={"badge accounts-badge"}>
          <img src={"./images/icons/plans.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Plans that suits you"}
        </span>
        <h2 className={"accounts-heading heading-gradient"}>{"Choose Your Account Type"}</h2>
      </div>
      <div className={"accounts-grid"}>
        <article className={"account-card"}>
          <span className={"account-card__border"}></span>
          <span className={"account-card__hover"}></span>
          <span className={"account-card__shadow"}>
            <span className={"border-shadow"}>
              <span className={"border-shadow__glow"}></span>
            </span>
            <span className={"border-shadow__line border-shadow__line--radial"}></span>
            <span className={"border-shadow border-shadow--bottom"}>
              <span className={"border-shadow__glow"}></span>
            </span>
            <span className={"border-shadow__line border-shadow__line--bottom"}></span>
          </span>
          <div className={"account-card__head"}>
            <h3 className={"account-card__title heading-gradient"}>{"GENFX"}</h3>
          </div>
          <p className={"account-card__desc"}>{"Low entry and spreads from 1.2 pips. Built for traders who want straightforward, cost-efficient access to the markets."}</p>
          <div className={"account-card__actions"}>
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
            <a href={"#demo"} className={"btn btn-ghost account-card__demo"} data-demo={"Try Demo"} aria-haspopup={"dialog"}>{"Try Demo"}</a>
          </div>
          <ul className={"account-features"}>
            <li className={"account-features__item"}>{"Minimum Deposit: $10"}</li>
            <li className={"account-features__item"}>{"Spreads from 1.2 pips"}</li>
            <li className={"account-features__item"}>{"FX/Gold/Crypto: $5 commission per side"}</li>
            <li className={"account-features__item"}>{"Indices: $3 commission per side"}</li>
            <li className={"account-features__item"}>{"Leverage up to 1:500"}</li>
          </ul>
        </article>
        <article className={"account-card account-card--popular"}>
          <span className={"account-card__border"}></span>
          <span className={"account-card__hover"}></span>
          <span className={"account-card__shadow"}>
            <span className={"border-shadow"}>
              <span className={"border-shadow__glow"}></span>
            </span>
            <span className={"border-shadow__line border-shadow__line--radial"}></span>
            <span className={"border-shadow border-shadow--bottom"}>
              <span className={"border-shadow__glow"}></span>
            </span>
            <span className={"border-shadow__line border-shadow__line--bottom"}></span>
          </span>
          <div className={"account-card__head"}>
            <h3 className={"account-card__title heading-gradient"}>{"RAW"}</h3>
            <span className={"account-card__tag"}>
              <img src={"./images/icons/crown.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Most Popular"}
            </span>
          </div>
          <p className={"account-card__desc"}>{"Raw spreads from 0.1 pips and low round-turn commissions. Suitable for active traders who want more control over execution."}</p>
          <div className={"account-card__actions"}>
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
            <a href={"#demo"} className={"btn btn-ghost account-card__demo"} data-demo={"Try Demo"} aria-haspopup={"dialog"}>{"Try Demo"}</a>
          </div>
          <ul className={"account-features"}>
            <li className={"account-features__item"}>{"Minimum Deposit: $500"}</li>
            <li className={"account-features__item"}>{"Raw spreads from 0.1 pips"}</li>
            <li className={"account-features__item"}>{"FX/Gold/Crypto: $7 commission round turn"}</li>
            <li className={"account-features__item"}>{"Indices: $0.70 commission round turn"}</li>
            <li className={"account-features__item"}>{"Leverage up to 1:500"}</li>
          </ul>
        </article>
        <article className={"account-card"}>
          <span className={"account-card__border"}></span>
          <span className={"account-card__hover"}></span>
          <span className={"account-card__shadow"}>
            <span className={"border-shadow"}>
              <span className={"border-shadow__glow"}></span>
            </span>
            <span className={"border-shadow__line border-shadow__line--radial"}></span>
            <span className={"border-shadow border-shadow--bottom"}>
              <span className={"border-shadow__glow"}></span>
            </span>
            <span className={"border-shadow__line border-shadow__line--bottom"}></span>
          </span>
          <div className={"account-card__head"}>
            <h3 className={"account-card__title heading-gradient"}>{"VIP"}</h3>
          </div>
          <p className={"account-card__desc"}>{"Spreads from 0.8 pips with no commission. Designed for high-volume traders who want premium, all-in pricing."}</p>
          <div className={"account-card__actions"}>
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
            <a href={"#demo"} className={"btn btn-ghost account-card__demo"} data-demo={"Try Demo"} aria-haspopup={"dialog"}>{"Try Demo"}</a>
          </div>
          <ul className={"account-features"}>
            <li className={"account-features__item"}>{"Minimum Deposit: $25,000"}</li>
            <li className={"account-features__item"}>{"Spreads from 0.8 pips"}</li>
            <li className={"account-features__item"}>{"No commission"}</li>
            <li className={"account-features__item"}>{"Leverage up to 1:500"}</li>
          </ul>
        </article>
      </div>
      <div className={"accounts-carousel splide is-overflow is-initialized"} id={"splide01"}>
        <div className={"splide__track"} id={"splide01-track"}>
          <ul className={"splide__list"} id={"splide01-list"}>
            <li className={"splide__slide"} id={"splide01-slide01"}>
              <article className={"account-card"}>
                <span className={"account-card__border"}></span>
                <span className={"account-card__hover"}></span>
                <span className={"account-card__shadow"}>
                  <span className={"border-shadow"}>
                    <span className={"border-shadow__glow"}></span>
                  </span>
                  <span className={"border-shadow__line border-shadow__line--radial"}></span>
                  <span className={"border-shadow border-shadow--bottom"}>
                    <span className={"border-shadow__glow"}></span>
                  </span>
                  <span className={"border-shadow__line border-shadow__line--bottom"}></span>
                </span>
                <div className={"account-card__head"}>
                  <h3 className={"account-card__title heading-gradient"}>{"GENFX"}</h3>
                </div>
                <p className={"account-card__desc"}>{"Low entry and spreads from 1.2 pips. Built for traders who want straightforward, cost-efficient access to the markets."}</p>
                <div className={"account-card__actions"}>
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
                  <a href={"#demo"} className={"btn btn-ghost account-card__demo"} data-demo={"Try Demo"} aria-haspopup={"dialog"}>{"Try Demo"}</a>
                </div>
                <ul className={"account-features"}>
                  <li className={"account-features__item"}>{"Minimum Deposit: $10"}</li>
                  <li className={"account-features__item"}>{"Spreads from 1.2 pips"}</li>
                  <li className={"account-features__item"}>{"FX/Gold/Crypto: $5 commission per side"}</li>
                  <li className={"account-features__item"}>{"Indices: $3 commission per side"}</li>
                  <li className={"account-features__item"}>{"Leverage up to 1:500"}</li>
                </ul>
              </article>
            </li>
            <li className={"splide__slide"} id={"splide01-slide02"}>
              <article className={"account-card account-card--popular"}>
                <span className={"account-card__border"}></span>
                <span className={"account-card__hover"}></span>
                <span className={"account-card__shadow"}>
                  <span className={"border-shadow"}>
                    <span className={"border-shadow__glow"}></span>
                  </span>
                  <span className={"border-shadow__line border-shadow__line--radial"}></span>
                  <span className={"border-shadow border-shadow--bottom"}>
                    <span className={"border-shadow__glow"}></span>
                  </span>
                  <span className={"border-shadow__line border-shadow__line--bottom"}></span>
                </span>
                <div className={"account-card__head"}>
                  <h3 className={"account-card__title heading-gradient"}>{"RAW"}</h3>
                  <span className={"account-card__tag"}>
                    <img src={"./images/icons/crown.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Most Popular"}
                  </span>
                </div>
                <p className={"account-card__desc"}>{"Raw spreads from 0.1 pips and low round-turn commissions. Suitable for active traders who want more control over execution."}</p>
                <div className={"account-card__actions"}>
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
                  <a href={"#demo"} className={"btn btn-ghost account-card__demo"} data-demo={"Try Demo"} aria-haspopup={"dialog"}>{"Try Demo"}</a>
                </div>
                <ul className={"account-features"}>
                  <li className={"account-features__item"}>{"Minimum Deposit: $500"}</li>
                  <li className={"account-features__item"}>{"Raw spreads from 0.1 pips"}</li>
                  <li className={"account-features__item"}>{"FX/Gold/Crypto: $7 commission round turn"}</li>
                  <li className={"account-features__item"}>{"Indices: $0.70 commission round turn"}</li>
                  <li className={"account-features__item"}>{"Leverage up to 1:500"}</li>
                </ul>
              </article>
            </li>
            <li className={"splide__slide"} id={"splide01-slide03"}>
              <article className={"account-card"}>
                <span className={"account-card__border"}></span>
                <span className={"account-card__hover"}></span>
                <span className={"account-card__shadow"}>
                  <span className={"border-shadow"}>
                    <span className={"border-shadow__glow"}></span>
                  </span>
                  <span className={"border-shadow__line border-shadow__line--radial"}></span>
                  <span className={"border-shadow border-shadow--bottom"}>
                    <span className={"border-shadow__glow"}></span>
                  </span>
                  <span className={"border-shadow__line border-shadow__line--bottom"}></span>
                </span>
                <div className={"account-card__head"}>
                  <h3 className={"account-card__title heading-gradient"}>{"VIP"}</h3>
                </div>
                <p className={"account-card__desc"}>{"Spreads from 0.8 pips with no commission. Designed for high-volume traders who want premium, all-in pricing."}</p>
                <div className={"account-card__actions"}>
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
                  <a href={"#demo"} className={"btn btn-ghost account-card__demo"} data-demo={"Try Demo"} aria-haspopup={"dialog"}>{"Try Demo"}</a>
                </div>
                <ul className={"account-features"}>
                  <li className={"account-features__item"}>{"Minimum Deposit: $25,000"}</li>
                  <li className={"account-features__item"}>{"Spreads from 0.8 pips"}</li>
                  <li className={"account-features__item"}>{"No commission"}</li>
                  <li className={"account-features__item"}>{"Leverage up to 1:500"}</li>
                </ul>
              </article>
            </li>
          </ul>
        </div>
      </div>
      <div className={"challenge-panel"} id={"challenge-section"}>
        <span className={"challenge-panel__border"}></span>
        <div className={"challenge-panel__texture"}>
          <span className={"challenge-panel__glow"}></span>
          <img src={"./images/texture.png"} alt={""} aria-hidden={"true"} loading={"lazy"} />
        </div>
        <div className={"tier-block"}>
          <h3 className={"tier-heading heading-gradient"}>{"Choose Your Tier"}</h3>
          <ul className={"tier-list"}>
            <li className={"tier-row"} tabIndex={"0"} role={"button"} aria-pressed={"false"}>
              <span className={"tier-row__name"}>{"TIER 1"}</span>
              <span className={"tier-row__price"}>{"$ 125"}</span>
              <span className={"tier-row__mult"}>
                <span className={"tier-row__plus"}>{"+"}</span>{"10x"}
              </span>
              <span className={"tier-row__total"}>{"$ 1,250"}</span>
            </li>
            <li className={"tier-row"} tabIndex={"0"} role={"button"} aria-pressed={"false"}>
              <span className={"tier-row__name"}>{"TIER 2"}</span>
              <span className={"tier-row__price"}>{"$ 125"}</span>
              <span className={"tier-row__mult"}>
                <span className={"tier-row__plus"}>{"+"}</span>{"10x"}
              </span>
              <span className={"tier-row__total"}>{"$ 2,500"}</span>
            </li>
            <li className={"tier-row tier-row--active"} tabIndex={"0"} role={"button"} aria-pressed={"true"}>
              <span className={"tier-row__name"}>{"TIER 3"}</span>
              <span className={"tier-row__price"}>{"$ 500"}</span>
              <span className={"tier-row__mult"}>
                <span className={"tier-row__plus"}>{"+"}</span>{"10x"}
              </span>
              <span className={"tier-row__total"}>{"$ 5,500"}</span>
            </li>
            <li className={"tier-row"} tabIndex={"0"} role={"button"} aria-pressed={"false"}>
              <span className={"tier-row__name"}>{"TIER 4"}</span>
              <span className={"tier-row__price"}>{"$ 125"}</span>
              <span className={"tier-row__mult"}>
                <span className={"tier-row__plus"}>{"+"}</span>{"10x"}
              </span>
              <span className={"tier-row__total"}>{"$ 10,000"}</span>
            </li>
          </ul>
        </div>
        <div className={"challenge-block"}>
          <div className={"challenge-head"}>
            <h3 className={"challenge-heading heading-gradient"}>{"10x Challenge"}</h3>
            <span className={"challenge-badge"}>
              <img src={"./images/icons/hot.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Hot"}
            </span>
          </div>
          <p className={"challenge-sub"}>{"Scale your trading account instantly with up to 10x capital leverage, retain 100% of your profits and dominate the Live Leaderboard in our monthly trading competitions."}</p>
          <div className={"challenge-stats"}>
            <div className={"challenge-stat"}>
              <span className={"challenge-stat__value"}>{"10x"}</span>
              <span className={"challenge-stat__label"}>{"Instant Leverage"}</span>
            </div>
            <div className={"challenge-stat"}>
              <span className={"challenge-stat__value"}>{"100%"}</span>
              <span className={"challenge-stat__label"}>{"Profit Share"}</span>
            </div>
            <div className={"challenge-stat"}>
              <span className={"challenge-stat__value"}>{"$125"}</span>
              <span className={"challenge-stat__label"}>{"Min Deposit"}</span>
            </div>
            <div className={"challenge-stat"}>
              <span className={"challenge-stat__value"}>{"10%"}</span>
              <span className={"challenge-stat__label"}>{"Max Drawdown"}</span>
            </div>
          </div>
          <a href={"#demo"} className={"btn glow-btn challenge-cta"} data-demo={"Complete on Leaderboard & Earn"} aria-haspopup={"dialog"}>
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
            <img src={"./images/icons/cup.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
            <span className={"glow-btn__label"}>{"Complete on Leaderboard & Earn"}</span>
          </a>
          <div className={"challenge-actions"}>
            <a href={"#demo"} className={"btn btn-primary btn-no-glow"} data-demo={"Get started"} aria-haspopup={"dialog"}>{"Get started"}</a>
            <a className={"btn btn-ghost"} href={"#challenge-section"}>{"Learn More"}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
