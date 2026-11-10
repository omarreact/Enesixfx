export default function AccountSteps() {
  return (
    <section id={"account-steps-section"}>
      <div className={"account-steps-intro section-intro"}>
        <span className={"badge account-steps-badge"}>
          <img src={"./images/icons/figures_icons/performance.svg"} alt={""} aria-hidden={"true"} />{"Getting started"}
        </span>
        <h2 className={"account-steps-heading heading-gradient"}>{"Seamless Access"}
          <br />{"to the Markets."}
        </h2>
        <p className={"account-steps-sub"}>{"Opening an account takes minutes, not days. Register, verify through our digital onboarding system, fund your account and trade within minutes."}</p>
        <div className={"account-steps-actions"}>
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
          <a className={"btn btn-gradient-border"} href={"#accounts-section"}>{"Learn More"}</a>
        </div>
      </div>
      <ol className={"account-steps-timeline"}>
        <li className={"step-item"}>
          <span className={"step-item__marker"}>{"1"}</span>
          <div className={"step-item__body"}>
            <span className={"step-item__eyebrow"}>{"Step 01"}</span>
            <h3 className={"step-item__title"}>{"Sign Up & Verify"}</h3>
            <p className={"step-item__desc"}>{"Create your profile. Upload your identification documents."}</p>
          </div>
        </li>
        <li className={"step-item"}>
          <span className={"step-item__marker"}>{"2"}</span>
          <div className={"step-item__body"}>
            <span className={"step-item__eyebrow"}>{"Step 02"}</span>
            <h3 className={"step-item__title"}>{"Fund"}</h3>
            <p className={"step-item__desc"}>{"Fund your account. Deposit using your preferred method (starts at $10)."}</p>
          </div>
        </li>
        <li className={"step-item"}>
          <span className={"step-item__marker"}>{"3"}</span>
          <div className={"step-item__body"}>
            <span className={"step-item__eyebrow"}>{"Step 03"}</span>
            <h3 className={"step-item__title"}>{"Trade"}</h3>
            <p className={"step-item__desc"}>{"Access leverage of up to 1:500 (varies by instrument) and the entire GenesisFX Markets ecosystem."}</p>
          </div>
        </li>
      </ol>
    </section>
  );
}
