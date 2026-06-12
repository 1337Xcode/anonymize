/**
 * Academic and professional title prefixes.
 * Plain text; the detector auto-escapes for regex.
 * Sorted longest-first at build time.
 */
export const TITLE_PREFIXES = [
  // Czech/Slovak pre-nominal
  "Ing.",
  "Mgr.",
  "MgA.",
  "Bc.",
  "BcA.",
  "JUDr.",
  "MUDr.",
  "MVDr.",
  "MDDr.",
  "PhDr.",
  "RNDr.",
  "PaedDr.",
  "ThDr.",
  "ThLic.",
  "ICDr.",
  "RSDr.",
  "PharmDr.",
  "artD.",
  "akad.",
  "doc.",
  "prof.",

  // Professor variants (AT/DE)
  "ao. Univ.-Prof.",
  "o. Univ.-Prof.",
  "Univ.-Prof.",
  "Hon.-Prof.",
  "em. Prof.",

  // German doctoral (compound before simple)
  "Dr. med. dent.",
  "Dr. med. vet.",
  "Dr. med.",
  "Dr. rer. nat.",
  "Dr. rer. soc.",
  "Dr. rer. pol.",
  "Dr. sc. tech.",
  "Dr. sc. nat.",
  "Dr. sc. hum.",
  "Dr. iur.",
  "Dr. jur.",
  "Dr. theol.",
  "Dr. oec.",
  "Dr. techn.",
  "Dr. h. c.",
  "Dr. phil.",
  "Dr.-Ing.",
  "Dr. Ing.",
  "Dr.",

  // German Diplom variants (longest first)
  "Dipl.-Wirt.-Ing.",
  "Dipl.-Betriebsw.",
  "Dipl.-Inform.",
  "Dipl.-Volksw.",
  "Dipl.-Psych.",
  "Dipl.-Phys.",
  "Dipl.-Chem.",
  "Dipl.-Biol.",
  "Dipl.-Math.",
  "Dipl.-Päd.",
  "Dipl.-Soz.",
  "Dipl.-Kfm.",
  "Dipl.-Jur.",
  "Dipl. Ing.",
  "Dipl.-Ing.",

  // Austrian Mag/Bakk variants
  "Mag. rer. soc. oec.",
  "Mag. rer. nat.",
  "Mag. phil.",
  "Mag. iur.",
  "Mag. arch.",
  "Mag. pharm.",
  "Mag. (FH)",
  "Mag.",
  "Bakk. rer. nat.",
  "Bakk. techn.",
  "Bakk. phil.",
  "Bakk.",

  // Swiss Lic variants
  "Lic. phil.",
  "Lic. iur.",
  "Lic. oec.",
  "Lic. theol.",
  "Lic.",

  // Other German/Austrian
  "Priv.-Doz.",
  "PD",
  "RA",
] as const;

/**
 * Courtesy/honorific titles that precede a person's
 * name. Sorted alphabetically. The detector escapes
 * dots and adds \b for entries in HONORIFIC_BOUNDARY.
 */
export const HONORIFICS = [
  "Avv.",
  "Dame",
  "Doamna",
  "Domnul",
  "Don",
  "Doña",
  "Dott.",
  "Judge",
  "Justice",
  "Lady",
  "Lord",
  "M.",
  "Madame",
  "Mademoiselle",
  "Maître",
  "Me",
  "Messrs",
  "Miss",
  "Mlle",
  "Mme",
  "Monsieur",
  "Mr",
  "Mrs",
  "Ms",
  "Pr",
  "Pr.",
  "President",
  "Señor",
  "Señora",
  "Sig.",
  "Sig.ra",
  "Signor",
  "Signora",
  "Signorina",
  "Sir",
  "Sr.",
  "Sra.",
] as const;

/**
 * Honorifics that need \b word-boundary anchors
 * (short or common words that could match mid-word).
 */
export const HONORIFIC_BOUNDARY = new Set([
  "Don",
  "Doña",
  "M.",
  "Me",
  "Pr",
  "Pr.",
  "Señor",
  "Señora",
]);

/**
 * Honorifics that are abbreviations: a dot after them is an
 * abbreviation dot (same sentence), so the detector keeps an
 * optional `.` between the title and the name ("Mr. Smith").
 * Every other honorific is a full word; a trailing dot ends a
 * sentence, so the detector must NOT consume it (otherwise a span
 * like "President. The Employee" crosses the sentence boundary).
 *
 * Maintained explicitly, NOT derived from "ends in a dot": "Mr" is
 * an abbreviation written without a dot, and "Lord" is a full word.
 */
export const HONORIFIC_ABBREVIATION = new Set([
  "Avv.",
  "Dott.",
  "M.",
  "Me",
  "Messrs",
  "Mlle",
  "Mme",
  "Mr",
  "Mrs",
  "Ms",
  "Pr",
  "Pr.",
  "Sig.",
  "Sig.ra",
  "Sr.",
  "Sra.",
]);

/**
 * Post-nominal degrees (comma or space separated after name).
 * Plain text; the detector auto-escapes for regex.
 */
export const POST_NOMINALS = [
  "Ph.D.",
  "Ph.D",
  "CSc.",
  "DrSc.",
  "ArtD.",
  "D.Phil.",
  "DPhil.",
  "MPhil.",
  "MBA",
  "MPA",
  "LL.M.",
  "LL.B.",
  "M.Sc.",
  "B.Sc.",
  "MSc.",
  "BSc.",
  "M.Eng.",
  "B.Eng.",
  "M.A.",
  "B.A.",
  "JCD",
  "JD",
  "DiS.",
  "ACCA",
  "FCCA",
  "CIPM",
  "CIPT",
  "CIPP/E",
  "CIPP",

  // UK senior barrister rank (King's/Queen's Counsel).
  // Bare-letter form (no comma required), so the
  // detector treats it like Ph.D./MBA: name + space + KC.
  "KC",
  "QC",
] as const;

export const NONWESTERN_HONORIFICS = {
  in: [
    "Sri",
    "Shri",
    "Smt",
    "Smt.",
    "Kumari",
    "Pandit",
    "Pt.",
    "Adv.",
    "Adv",
    "Justice",
    "Hon'ble",
  ],
  ar: [
    "Al-",
    "El-",
    "Sheikh",
    "Shaikh",
    "Sheikha",
    "Ustaz",
    "Ustaza",
    "Abu",
    "Umm",
  ],
  "zh-Latn": [
    "Encik",
    "Puan",
    "Datuk",
    "Dato'",
    "Dato",
    "Tan Sri",
    "Tun",
  ] as const,
  "ja-Latn": ["-san", "-sama", "-sensei", "Mr.", "Ms."] as const,
  ko: ["Sunsaeng", "Gyosu"] as const,
  th: [
    "Khun",
    "Nai",
    "Nang",
    "Khunying",
    "Luang",
    "Phra",
    "Mom",
    "Momluang",
    "Mommuen",
    "Momratchawong",
  ] as const,
  vi: ["Ông", "Ong", "Ba", "Co"] as const,
  fil: [
    "Atty.",
    "Atty",
    "Ginoo",
    "Ginang",
    "Binibini",
    "G.",
    "Gng.",
    "Bb.",
  ] as const,
  id: [
    "Bapak",
    "Ibu",
    "Pak",
    "Bu",
    "Raden",
    "Tuan",
    "Nyonya",
    "Nona",
    "Haji",
    "Hajjah",
    "H.",
    "Hj.",
    "S.H.",
    "S.H",
    "Ir.",
    "Drs.",
  ] as const,
} as const;
