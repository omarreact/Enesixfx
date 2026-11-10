export default function AiCoach() {
  return (
    <section id={"ai-coach-section"}>
      <div className={"ai-coach__orb"} aria-hidden={"true"}>
        <svg className={"ai-coach__glow"} viewBox={"306.829 -219 935.5 437.5"} preserveAspectRatio={"none"} aria-hidden={"true"}>
          <path d={"M419.829 -112C292.229 -110.4 291.329 -182.667 306.829 -219H1242.33C1253.13 -143.4 1173.83 -116.167 1132.83 -112C961.829 -112 991.829 10.5 991.829 47.5C991.829 84.5 970.329 218.5 781.829 218.5C631.029 218.5 576.329 104.5 567.829 47.5C571.663 -6.33333 547.429 -113.6 419.829 -112Z"} />
        </svg>
        <div className={"ai-coach__orb-canvas"} aria-hidden={"true"}></div>
        <div className={"ai-coach__orb-glow"}></div>
      </div>
      <div className={"ai-coach__content"}>
        <span className={"ai-coach__badge"}>
          <img className={"ai-coach__badge-dot"} src={"./images/icons/chat_round.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Guided by AI"}
        </span>
        <h2 className={"ai-coach__heading heading-gradient"}>{"Genesis AI Trade Coach"}</h2>
        <p className={"ai-coach__sub"}>{"From idea to execution."}
          <br />{"Inside a single conversation."}
        </p>
      </div>
      <div className={"ai-coach__mockup-wrap"}>
        <div className={"ai-coach__mockup-highlight"} aria-hidden={"true"}>
          <div className={"ai-coach__mockup-highlight-glow"}></div>
        </div>
        <span className={"border-shadow"} aria-hidden={"true"}>
          <span className={"border-shadow__glow"}></span>
        </span>
        <div className={"ai-coach__mockup"}>
          <div className={"ai-coach__mockup-hdr"}>
            <div className={"ai-coach__mockup-brand"}>
              <span className={"ai-coach__mockup-brand-icon"} aria-hidden={"true"}>
                <img src={"./images/icons/chat_round_outline.svg"} alt={""} loading={"lazy"} />
              </span>
              <span className={"ai-coach__mockup-brand-name"}>{"AI Coach"}</span>
              <span className={"ai-coach__mockup-brand-ver"}>{"v2.2"}</span>
            </div>
            <div className={"ai-coach__mockup-ctrls"}>
              <span className={"ai-coach__mockup-credits"}>
                <svg viewBox={"0 0 16 16"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M9 1.5 3.5 9H7.5l-1 5.5L13 6.5H8.5l.5-5z"} stroke={"#a78bfa"} strokeWidth={"1.2"} strokeLinejoin={"round"} />
                </svg>{"47"}
              </span>
              <button className={"ai-coach__mockup-ctrl-btn"} aria-label={"Library"} type={"button"}>
                <svg viewBox={"0 0 16 16"} fill={"none"}>
                  <path d={"M8 3.4S6.6 2.5 4.2 2.5 1.5 3 1.5 3v9.4s.9-.5 2.7-.5S8 13 8 13m0-9.6S9.4 2.5 11.8 2.5 14.5 3 14.5 3v9.4s-.9-.5-2.7-.5S8 13 8 13m0-9.6V13"} stroke={"currentColor"} strokeWidth={"1.1"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </button>
              <button className={"ai-coach__mockup-ctrl-btn"} aria-label={"Expand"} type={"button"}>
                <svg viewBox={"0 0 16 16"} fill={"none"}>
                  <path d={"M9.5 6.5 14 2m0 0h-3.5M14 2v3.5M6.5 9.5 2 14m0 0h3.5M2 14v-3.5"} stroke={"currentColor"} strokeWidth={"1.2"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                </svg>
              </button>
              <button className={"ai-coach__mockup-ctrl-btn"} aria-label={"Minimize"} type={"button"}>
                <svg viewBox={"0 0 16 16"} fill={"none"}>
                  <path d={"M4 8h8"} stroke={"currentColor"} strokeWidth={"1.3"} strokeLinecap={"round"} />
                </svg>
              </button>
            </div>
          </div>
          <div className={"ai-coach__mockup-body"}>
            <div className={"ai-coach__mockup-sidebar"}>
              <button className={"ai-coach__mockup-newchat"} type={"button"}>
                <svg viewBox={"0 0 14 14"} fill={"none"} aria-hidden={"true"}>
                  <path d={"M7 2v10M2 7h10"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} />
                </svg>{"New chat"}
              </button>
              <div className={"ai-coach__mockup-search"}>
                <svg viewBox={"0 0 14 14"} fill={"none"} aria-hidden={"true"}>
                  <circle cx={"6"} cy={"6"} r={"3.5"} stroke={"currentColor"} strokeWidth={"1.1"} />
                  <path d={"M9 9l2.5 2.5"} stroke={"currentColor"} strokeWidth={"1.1"} strokeLinecap={"round"} />
                </svg>
                <span>{"Search chats..."}</span>
              </div>
              <div className={"ai-coach__mockup-tabs"}>
                <button className={"ai-coach__mockup-tab ai-coach__mockup-tab--on"} type={"button"}>{"Chats"}</button>
                <button className={"ai-coach__mockup-tab"} type={"button"}>{"Trades"}</button>
                <button className={"ai-coach__mockup-tab"} type={"button"}>{"Strategies"}</button>
              </div>
              <ul className={"ai-coach__mockup-chatlist"}>
                <li className={"ai-coach__mockup-chatitem"}>
                  <img src={"./images/icons/chat_round_outline.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Which asset should I focus on?"}
                </li>
              </ul>
            </div>
            <div className={"ai-coach__mockup-main"}>
              <div className={"ai-coach__mockup-empty"}>
                <div className={"ai-coach__mockup-empty-icon"} aria-hidden={"true"}>
                  <img src={"./images/icons/chat_round_outline.svg"} alt={""} loading={"lazy"} />
                </div>
                <p className={"ai-coach__mockup-empty-heading"}>{"Ask me anything about your trades"}</p>
                <p className={"ai-coach__mockup-empty-sub"}>{"I can only see your trading data — nothing else."}</p>
                <div className={"ai-coach__mockup-chips"}>
                  <button className={"ai-coach__mockup-chip"} type={"button"}>{"What are my biggest weaknesses?"}</button>
                  <div className={"ai-coach__mockup-chip-row"}>
                    <button className={"ai-coach__mockup-chip"} type={"button"}>{"Which asset should I focus on?"}</button>
                    <button className={"ai-coach__mockup-chip"} type={"button"}>{"Am I overtrading?"}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
