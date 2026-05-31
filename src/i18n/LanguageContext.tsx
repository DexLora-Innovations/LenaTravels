import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Translation } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "lena-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as Lang | null)
        : null;
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
