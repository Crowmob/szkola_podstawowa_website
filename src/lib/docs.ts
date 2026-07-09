export type DocLink = { kind: "PDF" | "DOC" | "DOCX" | "XLSX"; url: string };
export type DocItem = { name: string; files: DocLink[] };

// Zasady rekrutacji — link to the parent foundation's statute as an example
// document; SP uses inline recruitment info + contact with the sekretariat.
export const zasadyDoc: DocItem = {
  name: "Statut Fundacji „Dla Polonii”",
  files: [{ kind: "PDF", url: "https://sppolonijna.edu.pl/wp-content/uploads/statut-Fundacji.pdf" }],
};

// SP recruitment documents. The old SP site does not publicly host individual
// application forms — full package is issued by the sekretariat on request.
// Forms without a public URL open a mailto link.
const CONTACT = "mailto:sekretariat@liceumpolonijne.edu.pl?subject=Prośba%20o%20dokumenty%20rekrutacyjne%20-%20Szkoła%20Podstawowa";

export const spDocs: DocItem[] = [
  { name: "Kwestionariusz kandydata (klasy 1–8)", files: [{ kind: "PDF", url: CONTACT }] },
  { name: "Podanie rodziców", files: [{ kind: "PDF", url: CONTACT }] },
  { name: "Karta zdrowia ucznia", files: [{ kind: "PDF", url: CONTACT }] },
  { name: "Zezwolenie na rozpowszechnianie wizerunku", files: [{ kind: "PDF", url: CONTACT }] },
  { name: "Zgoda na samodzielny powrót do domu", files: [{ kind: "PDF", url: CONTACT }] },
];
