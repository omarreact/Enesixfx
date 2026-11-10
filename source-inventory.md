# Source motion inventory

Source inspected: `https://www.genesisfxmarkets.com/`

## Captured motion language

| Area | Source behavior | Local implementation |
| --- | --- | --- |
| Header | 4s breathing navigation glow, pointer-follow light, animated dropdown panels | Matching 4s glow, pointer tracking, and existing dropdown transitions |
| Hero | Staggered load sequence, 1.1s dashboard rise, moving glow field | 1.05s staggered text entry, 1.1s dashboard rise, pointer/scroll parallax, two ambient glow orbits |
| Section intros | Large GSAP-style vertical reveals with blur and opacity | 150px staged reveals with blur, scale, opacity, and 85ms child staggering |
| Cards and rows | Staggered entrance, glow travel, hover elevation | Staggered entrances, 6s border glow travel, lift/scale/brightness hover motion |
| Liquidity | Sequential table-row reveal and glowing ticker details | Per-row stagger, ticker pulse, filter-safe re-render behavior |
| Carousels | Smooth transitions, progress movement, repeated cycling | Smooth snapping, progress updates, 5.2s autoplay, pause on hover/focus, arrows and dots |
| Account steps | Scroll-led active states | Intersection-driven active step with marker glow and text emphasis |
| GenSocial | Pinned/scroll-driven visual changes | 4.3s automated panel rotation with pause on hover/focus and manual controls |
| AI / CTA | Floating orb and slow ambient glow movement | 5.6s orb float and independently timed CTA glow drift |
| Accessibility | Motion can be reduced | `prefers-reduced-motion` disables autoplay, parallax, long animations, and transitions |

No new third-party assets or production APIs were added.
