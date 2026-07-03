## Goal

Borrow the strongest microagi.ai design moves and adapt them to the existing RCTUB single-page site without losing the dark + TU Berlin red identity we already built.

## What to take from microagi.ai

1. **Cinematic full-bleed hero image** behind the headline (theirs: robot in a field, cream sky). We'll generate an RCTUB-appropriate equivalent: a humanoid/quadruped robot in a moody industrial / Berlin-tech scene.
2. **Oversized two-tone display headline** — first line in muted gray, second line in strong foreground color. We'll apply this to the hero ("building / robots at tu berlin" or similar).
3. **Compact pill nav anchored top-left** with the wordmark inside the same pill as the links (we already have a pill nav; restyle to match: white/translucent pill, wordmark + links together, top-left rather than centered).
4. **Partner logo strip along the bottom of the hero** (Google Cloud / NVIDIA / Unitree on theirs → TU Berlin / DFKI / Fraunhofer placeholders on ours, monochrome wordmarks on the hero image).
5. **"Our deployment stack" section** = two large numbered cards (001, 002) with a product name, short description, illustrative image, and an arrow link. We'll repurpose this as a **"Our projects" / "What we build"** section with 2–3 numbered project cards (e.g. `001 humanoid manipulation`, `002 autonomous drones`, `003 swarm robotics`) replacing or augmenting the current plain Mission/WhoWeAre blocks.
6. **Section eyebrow with small brand glyph + label** ("⬢ Our capabilities") — small icon + lowercase label above each section header. Apply to all our sections (01–05).

## What stays (do not change)

- Single-page scope, anchor nav, TU Berlin red (#C50E1F) as the accent.
- Dark base palette — we are **not** flipping to microagi's cream background; instead we'll use a dark cinematic hero (deep charcoal sky) so the two-tone headline reads as muted-gray + off-white, with red reserved for accents/CTA.
- Existing sections: Hero, 01 Who We Are, 02 Mission, 03 Team, 04 Partners, 05 Contact, Footer. Placeholders stay generic.

## Section-by-section changes

```text
Hero            → full-bleed AI image bg, two-tone oversized headline,
                  pill nav top-left, partner logo strip at bottom,
                  single primary CTA pill ("Join the club")
01 Who We Are   → add eyebrow "◆ about" + tighten typography
02 Mission      → unchanged copy, new eyebrow style
03 Projects     → NEW section (replaces current generic "Mission" filler card grid),
                  numbered 001/002/003 large cards in microagi stack style,
                  each card: number, name, 2-line desc, placeholder tile, arrow link
   (renumber subsequent anchors)
04 Team         → keep, add eyebrow
05 Partners     → restyle to match the hero logo strip (mono wordmarks on
                  bordered tiles, single horizontal row on desktop)
06 Contact      → keep, add eyebrow
Footer          → unchanged
```

Anchor nav updates to: `01 about · 02 mission · 03 projects · 04 team · 05 partners · 06 contact`.

## Technical notes

- Generate one hero image with `imagegen` (premium, 1920×1080, cinematic robotics scene, dark/charcoal palette with warm rim light so red accents pop). Save to `src/assets/hero.jpg` and import in `Hero.tsx`.
- Add display-headline utility variant in `styles.css`: `display-text-muted` (uses `--muted-foreground`) so we can compose the two-tone heading with two spans.
- Add new component `src/components/site/Projects.tsx` for the numbered stack; mount in `src/routes/index.tsx` between Mission and Team. Update NavBar items + scroll-spy IDs.
- Add small `SectionEyebrow` component (glyph + lowercase label) reused by every section header.
- Restyle `NavBar.tsx`: single pill containing wordmark + links, fixed top-left with small inset, translucent dark bg + hairline border.
- Restyle `Partners.tsx` tiles to monochrome bordered wordmarks; add a compact variant rendered inside the hero.
- No new routes, no backend, no data fetching. All colors remain semantic tokens; no hardcoded hex in components.

## Out of scope

- No 3D/WebGL, no video background, no parallax library.
- No copy rewrite beyond swapping section labels — placeholders stay.
- No light-mode variant.
