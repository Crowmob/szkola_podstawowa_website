# Plan: Szkoła Podstawowa Niepubliczna Kolegium św. Stanisława Kostki — website

Mirror the liceum site (design, layout, i18n, archive page) and adapt content for the primary school. Since this project is TanStack Start (file-based routing) and the liceum repo is plain Vite + React Router, I'll port the components into TanStack routes but keep the same visual system, sections, and behavior.

## Scope

### Pages
- `/` — landing page with the same sections as liceum, adapted for SP:
  - Header + language switcher (same 6 languages: PL / EN / RU / UK / BE / KK)
  - Hero (SP tagline: "już od pierwszej klasy stawiamy na indywidualny rozwój uczniów…")
  - O szkole — SP mission from `sppolonijna.edu.pl/o-nas`, connection to the liceum
  - Oferta — primary-school offerings (klasy 1–8, indywidualne podejście, wsparcie dla dzieci repatriantów i migrantów, itd.)
  - **Replace "Internat" section** with **"Kontynuacja nauki w Liceum"** — bridge card linking to the liceum site (SP doesn't have an internat; that starts in liceum)
  - Rekrutacja — SP recruitment info + downloadable docs (SP forms, not LO forms)
  - Kontakt — Bobrowiecka 9 budynek A, tel. (22) 559 21 10, 505 714 553, `sekretariat@liceumpolonijne.edu.pl`
  - Footer with same social links
- `/archiwum` — archive of "Z życia szkoły" for the podstawówka, sourced from `sppolonijna.edu.pl` (aktualnosci pages) with images pulled straight from their WP uploads

### Design system
- Copy `src/styles.css` tokens and utility classes (`.container-x`, `.reveal`, `kenburns`, etc.) from the liceum repo into this project's `src/styles.css`. Same fonts, colors (navy primary + gold accent), spacing.
- Reuse shadcn components already present in the template.

### Data
- `src/lib/site-i18n.ts` — port and adapt all 6 language dictionaries for SP copy (nav/hero/offer/recruitment/contact strings).
- `src/lib/archive-data.ts` — new dataset scraped from `sppolonijna.edu.pl`. I'll scrape the aktualnosci listing + individual post pages to get title / excerpt / date / images. Expect ~20–40 entries depending on what the old site exposes.
- `src/lib/docs.ts` — SP-specific recruitment documents. The old SP site doesn't publicly list `.docx`/`.pdf` forms the way the liceum does; I'll link to whatever downloadable docs I can find on sppolonijna.edu.pl, and mark the section as "skontaktuj się z sekretariatem" for missing forms. **I need your input here** — see open question below.

### Routing (TanStack Start)
- `src/routes/index.tsx` — landing page (replaces the current placeholder)
- `src/routes/archiwum.tsx` — archive page
- Update `__root.tsx` head metadata to real SP title/description/OG tags

### Images
- Hero + section images: reuse liceum's hero pattern but generate SP-appropriate images (younger kids, classroom scenes) OR pull directly from `sppolonijna.edu.pl/wp-content/uploads/...`. I'll default to the latter for authenticity, generating replacements only where nothing fits.

## Open questions (need your answers before I build)

1. **Recruitment docs** — the SP site doesn't expose the same set of downloadable forms the liceum does. Do you want me to:
   - (a) Reuse the liceum forms as placeholders and mark them "kontakt z sekretariatem", or
   - (b) Link to only the docs that exist on sppolonijna.edu.pl, or
   - (c) You'll provide the SP forms later and I should leave a placeholder list?

2. **"Internat" section** — SP has no dorm. OK to replace that section with a "Kontynuacja nauki w Liceum" bridge (with link to your liceum site), rather than dropping it entirely?

3. **Archive depth** — should I try to scrape every post from sppolonijna.edu.pl's aktualnosci archive (may be 30–60 entries across pagination), or keep it to the most recent ~15?

Once you answer, I'll build it in one go.
