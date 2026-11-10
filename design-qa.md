# Design QA

## Motion comparison

| Check | Result |
| --- | --- |
| Source motion inspected in live browser | Passed |
| Hero stagger and dashboard-rise timing | Passed |
| Scroll reveal distance, blur, easing, and stagger | Passed |
| Ambient nav, glow, border, orb, and CTA motion | Passed |
| Carousel autoplay and GenSocial rotation | Passed |
| Market filters after animation changes | Passed |
| Reduced-motion fallback | Passed |
| Production images and stylesheets | Passed, no broken assets |
| Production console | Passed, no application errors |
| Cloudflare build and deployment | Passed for commit `23bd6619c7e0f76095b93e887a75ef0b0642b6cc` |

## Remaining differences

The source uses its own WebGL globe and GSAP runtime. The local replica uses CSS and browser-native animation primitives for the same visible motion language without connecting to source runtime code or production APIs.

final result: passed
