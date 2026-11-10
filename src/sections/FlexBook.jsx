export default function FlexBook() {
  return (
    <section id={"verified-section"}>
      <div className={"verified__text"}>
        <div className={"verified__intro section-intro"}>
          <span className={"badge verified__badge"}>
            <img src={"./images/icons/security_shield.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />{"Transparent Track Record"}
          </span>
          <h2 className={"verified__heading heading-gradient"}>{"Your live trading"}
            <br className={"br-desktop"} />{" data, in one place."}
          </h2>
          <p className={"verified__sub"}>{"With Genesis FlexBook in just a click."}</p>
        </div>
      </div>
      <div className={"verified__media"}>
        <div className={"glow-image glow-image--fade"}>
          <div className={"glow-image__highlight"} aria-hidden={"true"}>
            <div className={"glow-image__highlight-glow"}></div>
          </div>
          <span className={"border-shadow"}>
            <span className={"border-shadow__glow"}></span>
          </span>
          <picture className={"glow-image__picture"}>
            <source media={"(orientation: portrait)"} srcSet={"./images/living_trading.webp"} />
            <img className="glow-image__img" src="./images/living_trading.webp" alt="Genesis FlexBook trading data dashboard" loading="lazy" />
          </picture>
        </div>
      </div>
    </section>
  );
}
