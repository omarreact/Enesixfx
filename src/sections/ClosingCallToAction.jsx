export default function ClosingCallToAction() {
  return (
    <section id={"instance-section"}>
      <div className={"instance-box"}>
        <span className={"instance-box__border"}></span>
        <picture className={"instance-box__bck"}>
          <source media={"(orientation: portrait)"} srcSet={"./images/mobile_instant_bck.webp"} />
          <img src="./images/instant_bck.webp" alt="" aria-hidden="true" loading="lazy" />
        </picture>
        <span className={"instance-glow instance-glow--top"}>
          <span className={"instance-glow__blob"}></span>
          <span className={"instance-glow__core"}></span>
          <span className={"instance-glow__texture"}></span>
        </span>
        <span className={"instance-glow instance-glow--bottom"}>
          <span className={"instance-glow__blob"}></span>
          <span className={"instance-glow__core"}></span>
          <span className={"instance-glow__texture"}></span>
        </span>
        <div className={"instance-box__content"}>
          <h2 className={"instance-heading heading-gradient"}>{"Instant Account"}
            <br />{"Opening & Funding"}
          </h2>
          <p className={"instance-sub"}>{"Trade within minutes!"}</p>
          <div className={"instance-actions"}>
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
            <a href={"#demo"} className={"btn btn-ghost"} data-demo={"Try Demo"} aria-haspopup={"dialog"}>{"Try Demo"}</a>
          </div>
        </div>
        <div className={"instance-box__visual"} aria-hidden={"true"}></div>
      </div>
    </section>
  );
}
