export default function Footer() {
  return (
    <footer className={"site-footer"}>
      <img src={"data:image/webp;base64,UklGRioMAABXRUJQVlA4WAoAAAAQAAAA3wEAIwEAQUxQSEQCAAABD9D/iAhIjiTJkZzsvraxO9ACEeCYIG0GBSBSgQgAkaBbVe1jYsixR0T/HbmRpEhTl2EvNOUXmnIRwIVyCngnEPgbgDUEqL8uBFynrSMAXxbfHQJKDQzQLQBcru8U8D/+rmsG2G+VtuUIQJeTwDZ2BwVYNNCOAFTvGRcOb0Fgr5Xu6YMCPF6yOAVoxh+GAdKwnxAgFwfgZRxAn5A+gMCSppdbCPCYlyiAu7Dzatcs0KNDMcB+O9LUY0cBXzS1PrD3GhxQ5x8SaBIE3KbW1QkAX3ZMi+0fA/Q8KzEA/eJrEmgtBj0SkE0xQGyTADawSJooMJtkaghQfyAKKA/fI0Bt0Z0BXody9wa6oAKlAOd2N/FElwYDlOoI8AKSu/csYIDStGQMUHM2AcAXXqBz9waqYcBtal2dAWojhoBpwoCasxmAfuM1CrQY9BDgfHN36ROmRgB7zt1wNQ7YQNh4Nzmg5Oe2OnDSuZurl5Hc/UMaDFCqrw9caNiDAV4ec/cWdl66cre0OvCWNneP/NURoNTV+sBTO3d7ytEI8KTK3fTOEzt3L2N1YEO5mwSGUYBctxxQB3gC2MTYbBiQu4WtDBx67p4SBuDVYKDHV6cAVxQC1P+EAM46d9+CwH7b9L3kEIAvdKbplgJqzmYAZUAQoGsZCLS8gYBNMUDqxwCwhZos0BQvg4DcOCnA88P3AHD0uXsyAHm8idzdOwHsdY1z9Llb16sDL5q5u5OAe+RoBigPL04AdbamAK4fnXXuHunICOCgc7cAVlA4IMAJAABwbgCdASrgASQBPhkMhUIhBFZvEgQAYS0t3C4XwFY8/sXBy/kM72/xLKLsnelLPtefbeYt8T++/UT7saI33LYa/9yKAdY6x1jrHWOsce9aFobQdN+Q6+t2JfLiXCbj237q6fQl6Rzw027JBy+YucpitGfZXLypOsLYF+JQmg+R8I1DLYIjMoaHJ75s1VURhVg5ySC6nobJICIgSO4NMCASrpYuDjN7MnUKn/uJAmMEIAFBNnugNdwL/GScunRdpR3ox/SB7TXHk09phh3+xIBG1eFJZ/fAL17XAgtJQjtFfcPCPVhbv/x3VQth9JF99uJiNpiFR5CoizdJuP0i3zyyIsCj40Kd8zdoqVdskzhs2SH4PJsDt0h7Au0X49EYbT/ljC284o4J3d82Cb/wzlzRLl99L5qO5xUkzuIGOkXri7DLDltiYTZefjfDDJvWzzQPuOQ01Rw7jxWrDpPyqNrUnBo0NAJbMIe3eOuZhTCr7HBEJSfMkvQDTFCl99BH0xU3LF1ZfwMk3hwOtXkGUL+A0xmv3WFgrTspOWw/xRzErq6ebjBzRo98qIxn2yTd85weN9d6lQdIItF1pjX3qNDtY1x3ExKYnAz03v66WDO6Ym/H7GJQFWqoxy0HzT8371jLSAetaBT4mnn+2lkT/i/qxI6jvmYNJsXlLDuzfowqvvCFHzFnmidyCpBBoDJREHT0+XEh0P2Ut1dvhBZUCmdge3a+XgvbADfccdjEYWPthkT7AYGCM2oDTOzvxluvY6CvFw4kEnOWzz9FhV7ASxmiAL0deayDVWrfSSLtF7kiZZxICMqo8bk7dmtb5mW43jp2cqxGRlOeEw5qo6/Kxyns3ux2zcbZWODOzDbQWWQm3oaFPGYim857rlNt17VLipHM0QcBDD0gLoPlcV3hvFqH5OJxwc1YSPGsUwoYq3x83SGsmIbVir1end4yjuUza60DS1344qRXjwI4iUE/JwoRvabd7jTiQSxWdepyV1xcKhGgvxHHzlpjNVkQE/S0w7+VqBMEhj4shy+TaDAQ/yVDU9Irho9L83V2wSKne1EPgF6lDlyXYg1GYvDrHWOx0BBCILfycWosvy4lxLiXEuJcS4lxLiXEuJcS4lxLiXEuJcS4lxLiXEuJcS4lxLiXEuJcS4lxLiXEuJcS4lxLiXEuJcS4lxLiXEuJcSzgAP7/yINbkG2VyAAR2Tc7piUcmKNjhstSgfF7ItN4IARRzQoIAh5RTxztKOPrUhChknkGx3VHCrx/KJxBnET38dcNjUVyPp75d4x8uSrwVRhsycHrUVs0vhgqPIQrQwyQEyQkITvrX/83s2Ha88p1svPOPMlgwP78pFAehq4hRVhnb+ISJoQXvV8sNjNwKCfklSes1OZMVVZrzdHMqFPH+hJu8C5n/NQdDiQVjBKu+84FI11/dpOhV3/YyJ0brayqyKTYtKFQn8KqqvfPUu8/xOc4H2H9mhAmLGpGT6h1F6t3AySHiyV2kCLuAcgIexC0aqxSconAKsCSwbdzR//9W9vTSUuHAHAPK+mjb0kLXoKK7T+CNrWWDx5kaFEDX+3zs/2Tu9B0PLqyhzytKB52DOFMhawxvgCctYxGA4OkUaKIQFMvW2ZKstm/GInwJYv3AkHsNmuqIcri1EmNH4C9BrI4bfA/XMFmSM5vN71Ilzk4Sq5KiqyhPjpKtf2Ywq28s4AWylIYAkdVgLrlLcSNZAdlWh4tzYbpSKWWu/2+wV7e9dSJ0nbwBUQBtf1euwPUnZ19ANLa2H+JV7UoadXrbQWsBjmboAL5C1DLHnAkmpoXjHQY67S3kPW6y/RC7ottYyjL2veUTx0t3JzwL3Il5ewXkE8EFjXh4W8dGpb5C74kR4o+OWjbe1AXbNVP2tObs4lRugAqwht9FzW7ptnS9fSyuXzGheWd5X35Dl9Jbmkwtm1YYnPr2aaPCwGJrNsFjGtfAwoZ6zgwuhJjDwD/E6O33pGzopdkce5Ygl/RgvYJe6dtMU4TTHJmTu/Z8xpK+xVkp6nVjVenCijySIorMJ4egU/qnJG3yq6n8ccHm42H9ov6FhFHYWUbWXysXfN1ZoiDqc/1tR1lshQlCg+Ogcnf4iqvauWvt/97gSnJVbIZqwxeoI7kaOmCTswpbUU+nuJ4iopGK8a4KNHGM4SXXl/mZvpR+7GGrcUoRoYVQhO/OzgwK4e/RYbXmqQZrd2yB4vZrScmM3UkXfP++39AZ+SSeZhNBz+VNOFSlgo7NqtAroi2pVzm/Xb4MA+UKrtut5cFB7BYUtr0iizAvLTP8FflK19fnitq143Z1XrKruoFbiX6/h8MFd6IoZLxNY6BFSID1PFiAQ2GhD6rVwDhpG6zblEb1K09JINOy8FbA8aaD8N39lCafEs4rKW2fou1wKc9dLxEyFdz5s62LSZx22u3TmI7NAXO/hRSKHR+hnZi3NeMQIhSnqm4ElY7gy5nMoth4Vq6ARAJs7opEuvfv71e4UuhihHRB/OtVY47lvbsDqsQIeSZf+36Z7xITyXlKyXZQZBSvIef8p8ky7yrbMUojP7QMt4UpTCO7anLe2IOJEoUlMLvL8e8H6RvykV3I6phDKFFy90o9Roub1zNZyiQEHB88/40z1GZzBoDhvaKYoDTAxNxZV1vrwkyJ3isNj89NJGIT73S+Uk62a7svWD/tMtlLnxhfDccxS46rLZI3T/n+Y3E956IZoEf4OrXAxhOsHo39zsDTSjgxWUDEzuwStsDKzp0Ves31/vbBOdPCpyd9zjewjtHAlZU3kN8AjUaspFezAJjITv6c57DpYLFmr4k0+wpmuF3gBwBm4lgkfXKf0Ex8O6raJ3Kn1Jycco+yLaZaJb8BOUn7y0I/8g+RUkBc2J60k6SLlWY0xF4Fjs9K5fhdeIXEKTeGla72d5XiSqdAqcuRIzga5SHlBC45Fn4SUFTeVe2H6aAOi9hf51Ss2+J+CF5PFPjRp4N3oB1Pi4AsnjeyzQT00ZsSjuv7GOLFp+eTgI+hkCxTTJREKUVl403P972SqVizp6jCXn9Cz3q44ZsyHu/Ab0UxKMVsy9XhoeWcCM8oqhewudPLPhSb4F2lTZu8Qc1nc1V3kp0umajX+M8VpnM8EeBCU0CkLZzByjMBlx4LW4wvRDZGJmGHckHAhEszZd1BtOxhnwHkweFMQwPekv4AD3xjRFPRdjShmQvmi0o9vcY2KnGALdTIrP6YdDIV3x36CazsT/MxH0hvuFuBoKU45uYe+eDqPmpoWNsw2amjItZgAAAAGsEAATQWqgAQVxZi4ogAYUbKIAgo8MgAB9iABmq8IAAAAA="} width={"480"} height={"292"} alt={""} aria-hidden={"true"} className={"site-footer__bck"} />
      <span className={"site-footer__glow"} aria-hidden={"true"}></span>
      <div className={"footer-top"}>
        <div className={"footer-brand"}>
          <a className={"footer-brand__logo"} aria-label={"Genesis FX home"} href={"#top"}>
            <img src={"./images/icons/brand_logo.png"} alt={"Genesis FX"} loading={"lazy"} />
          </a>
          <p className={"footer-brand__tagline"}>{"AI-Powered Trading"}</p>
          <address className={"footer-brand__contact"}>
            <span>{"Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia"}</span>
            <a href={"mailto:support@genesisfxmarkets.com"}>{"support@genesisfxmarkets.com"}</a>
          </address>
          <div className={"footer-socials"}>
            <a href={"https://www.youtube.com/@GenesisFXMarkets"} target={"_blank"} rel={"noopener noreferrer"} className={"footer-social"} aria-label={"YouTube"}>
              <img src={"./images/icons/socials/youtube.svg"} alt={"YouTube"} loading={"lazy"} />
            </a>
            <a href={"https://wa.me/message/H4LR7ZLJCZQFL1"} className={"footer-social"} aria-label={"WhatsApp"}>
              <img src={"./images/icons/socials/whatsapp.svg"} alt={"WhatsApp"} loading={"lazy"} />
            </a>
            <a href={"https://www.instagram.com/genesisfxmarkets"} target={"_blank"} rel={"noopener noreferrer"} className={"footer-social"} aria-label={"Instagram"}>
              <img src={"./images/icons/socials/instagram.svg"} alt={"Instagram"} loading={"lazy"} />
            </a>
          </div>
        </div>
        <nav className={"footer-nav"} aria-label={"Footer"}>
          <div className={"footer-col"}>
            <p className={"footer-col__title"}>{"Trade"}</p>
            <a className={"footer-col__link"} href={"#accounts-section"}>{"Accounts"}</a>
            <a className={"footer-col__link"} href={"#liquidity-section"}>{"Markets"}</a>
            <a className={"footer-col__link"} href={"#gateway-section"}>{"TradeLocker"}</a>
          </div>
          <div className={"footer-col"}>
            <p className={"footer-col__title"}>{"Education"}</p>
            <a className={"footer-col__link"} href={"#market-news"} data-preview={"market-news"} aria-haspopup={"dialog"}>{"Market News"}</a>
            <a className={"footer-col__link"} href={"#education"} data-preview={"education"} aria-haspopup={"dialog"}>{"Education Hub"}</a>
            <a className={"footer-col__link"} href={"#broker-section"}>{"Journal"}</a>
          </div>
          <div className={"footer-col"}>
            <p className={"footer-col__title"}>{"Assistance"}</p>
            <a className={"footer-col__link"} href={"#about"} data-preview={"about"} aria-haspopup={"dialog"}>{"About Us"}</a>
            <a className={"footer-col__link"} href={"#legal"} data-preview={"legal"} aria-haspopup={"dialog"}>{"Legal Documents"}</a>
            <a className={"footer-col__link"} href={"#contact"} data-preview={"contact"} aria-haspopup={"dialog"}>{"Contact Us"}</a>
            <a className={"footer-col__link"} href={"#faq"} data-preview={"faq"} aria-haspopup={"dialog"}>{"Help Center"}</a>
            <a className={"footer-col__link"} href={"#partners"} data-preview={"partners"} aria-haspopup={"dialog"}>{"Partners"}</a>
          </div>
        </nav>
      </div>
      <div className={"footer-platforms"}>
        <a href={"#demo"} className={"platform-card"} data-demo={"Trade onTradeLocker Web"} aria-haspopup={"dialog"}>
          <span className={"platform-card__fill"}></span>
          <span className={"platform-card__icon"}>
            <img src={"./images/icons/footer/desktop.png"} alt={""} aria-hidden={"true"} loading={"lazy"} />
          </span>
          <span className={"platform-card__text"}>
            <span className={"platform-card__small"}>{"Trade on"}</span>
            <span className={"platform-card__strong"}>{"TradeLocker Web"}</span>
          </span>
        </a>
        <a href={"https://tradelocker.com/desktop/"} target={"_blank"} rel={"noopener noreferrer"} className={"platform-card"}>
          <span className={"platform-card__fill"}></span>
          <span className={"platform-card__icon"}>
            <img src={"./images/icons/footer/tradelocker.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
          </span>
          <span className={"platform-card__text"}>
            <span className={"platform-card__small"}>{"Download for"}</span>
            <span className={"platform-card__strong"}>{"Desktop"}</span>
          </span>
        </a>
        <a href={"https://apps.apple.com/uy/app/tradelocker/id6447196449"} target={"_blank"} rel={"noopener noreferrer"} className={"platform-card"}>
          <span className={"platform-card__fill"}></span>
          <span className={"platform-card__icon"}>
            <img src={"./images/icons/footer/apple.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
          </span>
          <span className={"platform-card__text"}>
            <span className={"platform-card__small"}>{"Download on the"}</span>
            <span className={"platform-card__strong"}>{"App Store"}</span>
          </span>
        </a>
        <a href={"https://play.google.com/store/apps/details?id=com.tradelocker.mobile"} target={"_blank"} rel={"noopener noreferrer"} className={"platform-card"}>
          <span className={"platform-card__fill"}></span>
          <span className={"platform-card__icon"}>
            <img src={"./images/icons/footer/googleplay.svg"} alt={""} aria-hidden={"true"} loading={"lazy"} />
          </span>
          <span className={"platform-card__text"}>
            <span className={"platform-card__small"}>{"Get it on"}</span>
            <span className={"platform-card__strong"}>{"Google Play"}</span>
          </span>
        </a>
      </div>
      <div className={"footer-watermark"} aria-hidden={"true"}>
        <img className={"footer-watermark__img footer-watermark__img--desktop"} src={"./images/genesisfx_watermark.webp"} alt={""} loading={"lazy"} width={"1667"} height={"246"} />
        <img className={"footer-watermark__img footer-watermark__img--mobile"} src={"./images/genesis_fx_watermark_mobile.webp"} alt={""} loading={"lazy"} width={"323"} height={"48"} />
      </div>
      <div className={"footer-bottom"}>
        <div className={"footer-disclosure"}>
          <p className={"footer-disclosure__title"}>{"Risk Disclosure"}</p>
          <div className={"footer-disclosure__text"}>
            <p>{"Genesis FX Markets Ltd provides trading in leveraged CFDs and foreign exchange, which are complex instruments that carry a high risk of rapid capital loss due to leverage. These products may not be suitable for all investors; you should not trade with capital you cannot afford to lose. Past performance is not a reliable indicator of future results, and no information on this website constitutes investment, tax, legal, or financial advice. You are solely responsible for assessing whether trading is appropriate for your circumstances and, if necessary, seeking independent professional advice."}</p>
            <p>{"Genesis FX Markets Ltd is an International Business Company incorporated in Saint Lucia (Company Registration No. 2026-00491), with its registered office at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia. Corporate registration in Saint Lucia does not constitute financial regulation, licensing, or supervision by any financial authority."}</p>
            <p>
              <strong>{"Prohibited Jurisdictions:"}</strong>{" Genesis FX Markets Ltd strictly prohibits account opening, accepting deposits, or offering trading services to residents, citizens, or legal entities of jurisdictions subject to comprehensive international sanctions or FATF blacklisting, including the Democratic People's Republic of Korea (North Korea), Islamic Republic of Iran, Republic of the Union of Myanmar, Republic of Cuba, Syrian Arab Republic, and the Russian Federation. Access and onboarding from these territories are blocked under all circumstances."}
            </p>
            <p>
              <strong>{"Non-Solicited Jurisdictions:"}</strong>{" Genesis FX Markets Ltd does not market, advertise, or solicit financial derivatives or CFDs within jurisdictions where local distribution or licensing restrictions apply. Services are not directed to or solicited in the United States, Canada, the United Kingdom, European Economic Area (EEA) member states, Australia, Japan, Singapore, or Saint Lucia. Any access, account registration, or trading activity initiated by residents of these non-solicited jurisdictions is conducted strictly on the user's own exclusive initiative under the legal doctrine of unsolicited reverse solicitation."}
            </p>
          </div>
        </div>
        <div className={"footer-legal"}>
          <p className={"footer-legal__copy"}>{"© 2026 Genesis FX Markets. All rights reserved."}</p>
          <nav className={"footer-legal__links"} aria-label={"Legal"}>
            <a href={"#terms-conditions"} data-preview={"terms-conditions"} aria-haspopup={"dialog"}>{"Terms & Conditions"}</a>
            <a href={"#privacy-policy"} data-preview={"privacy-policy"} aria-haspopup={"dialog"}>{"Privacy Policy"}</a>
            <a href={"#anti-money-laundering"} data-preview={"anti-money-laundering"} aria-haspopup={"dialog"}>{"Anti-Money Laundering"}</a>
            <a href={"#risk-disclosure"} data-preview={"risk-disclosure"} aria-haspopup={"dialog"}>{"Risk Disclosure"}</a>
            <a href={"#cookie-policy"} data-preview={"cookie-policy"} aria-haspopup={"dialog"}>{"Cookie Policy"}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
