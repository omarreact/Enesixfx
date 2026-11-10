const languages = [
  ['en', '🇬🇧', 'English'], ['es', '🇪🇸', 'Español'], ['fr', '🇫🇷', 'Français'],
  ['de', '🇩🇪', 'Deutsch'], ['zh', '🇨🇳', '中文'],
];

function LocaleOptions() {
  return (
    <ul className="locale-menu__list" aria-label="Select language" hidden>
      {languages.map(([code, flag, name]) => (
        <li key={code}>
          <button type="button" data-language={code} className={`locale-menu__option${code === 'en' ? ' is-active' : ''}`}>
            <span className="locale-menu__flag" aria-hidden="true">{flag}</span>{name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  return (
    <>
      <header className={"site-header"}>
        <div className={"site-header__brand"}>
          <a className={"brand-logo"} aria-label={"Genesis FX home"} href={"#top"}>
            <img src={"./images/icons/brand_logo.webp"} alt={"Genesis FX"} />
          </a>
        </div>
        <nav className={"site-nav"} aria-label={"Primary"}>
          <span className={"site-nav__glow-clip"} aria-hidden={"true"}>
            <span className={"site-nav__glow-follow"}>
              <img className={"site-nav__glow"} src={"./images/glow_ellipse.svg"} alt={""} />
            </span>
          </span>
          <div className={"site-nav__item"} data-nav-item={"0"}>
            <button className={"site-nav__trigger"} type={"button"} aria-expanded={"false"}>{"Trade"}
              <svg className={"site-nav__caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                <path d={"M6 9l6 6 6-6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
              </svg>
            </button>
          </div>
          <div className={"site-nav__item"} data-nav-item={"1"}>
            <button className={"site-nav__trigger"} type={"button"} aria-expanded={"false"}>{"Products"}
              <svg className={"site-nav__caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                <path d={"M6 9l6 6 6-6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
              </svg>
            </button>
          </div>
          <a className={"site-nav__item site-nav__item--link"} data-nav-item={"2"} href={"#partners"} data-preview={"partners"} aria-haspopup={"dialog"}>
            <span className={"site-nav__trigger"} aria-expanded={"false"}>{"Partners"}</span>
          </a>
          <div className={"site-nav__item"} data-nav-item={"3"}>
            <button className={"site-nav__trigger"} type={"button"} aria-expanded={"false"}>{"Assistance"}
              <svg className={"site-nav__caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                <path d={"M6 9l6 6 6-6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
              </svg>
            </button>
          </div>
        </nav>
        <div className={"site-nav__panel"} aria-hidden={"true"} inert>
          <div className={"site-nav__card"}>
            <div className={"site-nav__group"} data-group={"0"}>
              <a className={"site-nav__link"} href={"#accounts-section"}>
                <span className={"site-nav__link-label"}>{"Accounts"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#liquidity-section"}>
                <span className={"site-nav__link-label"}>{"Markets"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#gateway-section"}>
                <span className={"site-nav__link-label"}>{"TradeLocker"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
            </div>
            <div className={"site-nav__group"} data-group={"1"}>
              <a className={"site-nav__link"} href={"#genesis-social-section"}>
                <span className={"site-nav__link-label"}>{"GenSocial"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#challenge-section"}>
                <span className={"site-nav__link-label"}>{"10x Challenge"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#market-news"} data-preview={"market-news"} aria-haspopup={"dialog"}>
                <span className={"site-nav__link-label"}>{"Market News"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#education"} data-preview={"education"} aria-haspopup={"dialog"}>
                <span className={"site-nav__link-label"}>{"Genesis Academy"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#broker-section"}>
                <span className={"site-nav__link-label"}>{"Trade Journal"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#verified-section"}>
                <span className={"site-nav__link-label"}>{"FlexBook"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#ai-coach-section"}>
                <span className={"site-nav__link-label"}>{"AI Coach"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
            </div>
            <div className={"site-nav__group"} data-group={"3"}>
              <a className={"site-nav__link"} href={"#faq"} data-preview={"faq"} aria-haspopup={"dialog"}>
                <span className={"site-nav__link-label"}>{"Help Center"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#contact"} data-preview={"contact"} aria-haspopup={"dialog"}>
                <span className={"site-nav__link-label"}>{"Get in Touch"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
              <a className={"site-nav__link"} href={"#legal"} data-preview={"legal"} aria-haspopup={"dialog"}>
                <span className={"site-nav__link-label"}>{"Legal"}</span>
                <svg className={"site-nav__link-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={"site-header__actions"}>
          <div className={"locale-menu locale-menu--pill"}>
            <button className={"locale-pill"} type={"button"} aria-label={"Select language"} aria-haspopup={"listbox"} aria-expanded={"false"}>
              <span className={"locale-pill__flag"}>{"🇬🇧"}</span>
              <svg className={"locale-pill__caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                <path d={"M6 9l6 6 6-6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
              </svg>
            </button>
            <LocaleOptions />
          </div>
          <button className={"header-help"} type={"button"} aria-label={"Help"}>
            <img src={"./images/icons/Help.svg"} alt={""} aria-hidden={"true"} />
          </button>
          <a href={"#demo"} className={"btn btn-ghost"} data-demo={"Sign Up"} aria-haspopup={"dialog"}>
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
            <span className={"btn__label"}>{"Sign Up"}</span>
          </a>
          <a href={"#demo"} className={"btn glow-btn"} data-demo={"Sign In"} aria-haspopup={"dialog"}>
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
            <span className={"glow-btn__label"}>{"Sign In"}</span>
          </a>
          <button className={"hamburger"} type={"button"} aria-label={"Open menu"} aria-expanded={"false"}>
            <span className={"hamburger__bar"}></span>
            <span className={"hamburger__bar"}></span>
          </button>
        </div>
      </header>
      <div className={"mobile-menu"} aria-hidden={"true"} inert>
        <button className={"mobile-menu__scrim"} type={"button"} data-mobile-close={"true"} aria-label={"Close menu"}></button>
        <div className={"mobile-menu__panel"}>
          <img className={"mobile-menu__decor"} src={"./images/menu_bck.webp"} alt={""} aria-hidden={"true"} loading={"lazy"} />
          <div className={"mobile-menu__top"}>
            <a className={"brand-logo"} aria-label={"Genesis FX home"} href={"#top"}>
              <img src={"./images/icons/brand_logo.webp"} alt={"Genesis FX"} />
            </a>
            <button className={"mobile-menu__close"} type={"button"} data-mobile-close={"true"} aria-label={"Close menu"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                <path d={"M6 6l12 12M18 6L6 18"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} />
              </svg>
            </button>
          </div>
          <div className={"mobile-menu__body"}>
            <nav className={"mobile-menu__nav"} aria-label={"Mobile"}>
              <div className={"mobile-menu__item"} data-mobile-nav={"0"}>
                <button className={"mobile-menu__trigger"} type={"button"} aria-expanded={"false"}>
                  <span className={"mobile-menu__label"}>{"Trade"}</span>
                  <svg className={"mobile-menu__caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                    <path d={"M6 9l6 6 6-6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                  </svg>
                </button>
                <div className={"mobile-menu__submenu"} inert>
                  <div className={"mobile-menu__submenu-inner"}>
                    <a className={"mobile-menu__sublink"} href={"#accounts-section"}>{"Accounts"}</a>
                    <a className={"mobile-menu__sublink"} href={"#liquidity-section"}>{"Markets"}</a>
                    <a className={"mobile-menu__sublink"} href={"#gateway-section"}>{"TradeLocker"}</a>
                  </div>
                </div>
              </div>
              <div className={"mobile-menu__item"} data-mobile-nav={"1"}>
                <button className={"mobile-menu__trigger"} type={"button"} aria-expanded={"false"}>
                  <span className={"mobile-menu__label"}>{"Products"}</span>
                  <svg className={"mobile-menu__caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                    <path d={"M6 9l6 6 6-6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                  </svg>
                </button>
                <div className={"mobile-menu__submenu"} inert>
                  <div className={"mobile-menu__submenu-inner"}>
                    <a className={"mobile-menu__sublink"} href={"#genesis-social-section"}>{"GenSocial"}</a>
                    <a className={"mobile-menu__sublink"} href={"#challenge-section"}>{"10x Challenge"}</a>
                    <a className={"mobile-menu__sublink"} href={"#market-news"} data-preview={"market-news"} aria-haspopup={"dialog"}>{"Market News"}</a>
                    <a className={"mobile-menu__sublink"} href={"#education"} data-preview={"education"} aria-haspopup={"dialog"}>{"Genesis Academy"}</a>
                    <a className={"mobile-menu__sublink"} href={"#broker-section"}>{"Trade Journal"}</a>
                    <a className={"mobile-menu__sublink"} href={"#verified-section"}>{"FlexBook"}</a>
                    <a className={"mobile-menu__sublink"} href={"#ai-coach-section"}>{"AI Coach"}</a>
                  </div>
                </div>
              </div>
              <a className={"mobile-menu__link"} href={"#partners"} data-preview={"partners"} aria-haspopup={"dialog"}>
                <span className={"mobile-menu__label"}>{"Partners"}</span>
              </a>
              <div className={"mobile-menu__item"} data-mobile-nav={"3"}>
                <button className={"mobile-menu__trigger"} type={"button"} aria-expanded={"false"}>
                  <span className={"mobile-menu__label"}>{"Assistance"}</span>
                  <svg className={"mobile-menu__caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                    <path d={"M6 9l6 6 6-6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                  </svg>
                </button>
                <div className={"mobile-menu__submenu"} inert>
                  <div className={"mobile-menu__submenu-inner"}>
                    <a className={"mobile-menu__sublink"} href={"#faq"} data-preview={"faq"} aria-haspopup={"dialog"}>{"Help Center"}</a>
                    <a className={"mobile-menu__sublink"} href={"#contact"} data-preview={"contact"} aria-haspopup={"dialog"}>{"Get in Touch"}</a>
                    <a className={"mobile-menu__sublink"} href={"#legal"} data-preview={"legal"} aria-haspopup={"dialog"}>{"Legal"}</a>
                  </div>
                </div>
              </div>
            </nav>
            <div className={"locale-menu locale-menu--row"}>
              <button className={"mobile-menu__locale"} type={"button"} aria-haspopup={"listbox"} aria-expanded={"false"}>
                <span className={"mobile-menu__locale-flag"}>{"🇬🇧"}</span>
                <span className={"mobile-menu__locale-label"}>{"English"}</span>
                <svg className={"mobile-menu__locale-caret"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M6 9l6 6 6-6"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </button>
              <LocaleOptions />
            </div>
          </div>
          <div className={"mobile-menu__footer"}>
            <a href={"#demo"} className={"btn btn-ghost mobile-menu__signup"} data-demo={"Sign Up"} aria-haspopup={"dialog"}>
              <span className={"btn__label"}>{"Sign Up"}</span>
            </a>
            <a href={"#demo"} className={"btn glow-btn mobile-menu__signin"} data-demo={"Sign In"} aria-haspopup={"dialog"}>
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
              <span className={"glow-btn__label"}>{"Sign In"}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
