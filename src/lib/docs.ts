export type DocLink = { kind: "PDF" | "DOC" | "DOCX" | "XLSX"; url: string };
export type DocItem = { name: string; files: DocLink[] };

const BASE = "https://sppolonijna.edu.pl/wp-content/uploads";

// "Zasady rekrutacji" — official rules PDF (PL + RU versions).
export const zasadyDocs: DocItem[] = [
  { name: "Zasady rekrutacji 2026/2027 (PL)", files: [{ kind: "PDF", url: `${BASE}/SP-zasady-rekrutacji-2026-2027.pdf` }] },
  { name: "Правила набора 2026/2027 (RU)", files: [{ kind: "PDF", url: `${BASE}/SP-rekrutacja-wersja-rosyjska-2026-2027.pdf` }] },
];

// SP recruitment forms — real PDFs hosted on sppolonijna.edu.pl.
export const spDocs: DocItem[] = [
  { name: "Kwestionariusz kandydata", files: [{ kind: "PDF", url: `${BASE}/kwestionariusz-SPN-4.pdf` }] },
  { name: "Podanie rodziców", files: [{ kind: "PDF", url: `${BASE}/podanie-rodzicow-1.pdf` }] },
  { name: "Podanie kandydata (klasy IV–VIII)", files: [{ kind: "PDF", url: `${BASE}/podanie-kandydata-3.pdf` }] },
  { name: "Oświadczenie rodziców", files: [{ kind: "PDF", url: `${BASE}/oswiadczenie-rodzicow-2.pdf` }] },
  { name: "Zgoda na rozpowszechnianie wizerunku", files: [{ kind: "PDF", url: `${BASE}/zezwolenie-na-rozpowszechnienie-wizerunku-2.pdf` }] },
];

// Wymagane dokumenty przy rekrutacji — spisane ze strony SP.
export const requiredDocs: string[] = [
  "Kwestionariusz kandydata (do pobrania poniżej lub w sekretariacie)",
  "Podanie rodziców o przyjęcie dziecka do szkoły",
  "Podanie kandydata o przyjęcie do szkoły — do klasy IV–VIII",
  "Życiorys napisany przez kandydata — do klasy IV–VIII",
  "Oceny z I semestru (bieżącego) oraz świadectwo z poprzedniej klasy",
  "Zdjęcie do legitymacji szkolnej (3,5 × 4,5 cm, min. 300 DPI, jasne tło)",
  "Dla osób nieposiadających polskiego obywatelstwa — ksero pierwszej strony paszportu zagranicznego",
  "Dla osób polskiego pochodzenia — ksero paszportu oraz ksero Karty Polaka",
  "Dla osób z numerem PESEL — druk nadania (ksero)",
  "Odpis aktu urodzenia (ksero) — jeśli kandydat zostanie przyjęty",
];

// Warunki odpłatności.
export const fees = {
  monthly: { label: "Czesne", value: "1 200 zł / miesiąc", note: "płatne przez 12 miesięcy" },
  enroll: { label: "Wpisowe", value: "500 zł", note: "jednorazowa, bezzwrotna wpłata" },
  extras1_6: {
    label: "Klasy I–VI (jednorazowo)",
    items: ["Ubezpieczenie NNW — 50 zł", "Dopłata do podręczników językowych — 100 zł"],
  },
  extras7_8: {
    label: "Klasy VII–VIII (jednorazowo)",
    items: ["Ubezpieczenie NNW — 50 zł", "Dopłata do podręczników językowych — 150 zł"],
  },
  meals: { label: "Obiady", value: "25 zł / obiad", note: "płatność w sekretariacie" },
};

// Backwards-compat export used by older imports.
export const zasadyDoc: DocItem = zasadyDocs[0];
