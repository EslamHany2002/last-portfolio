import { createContext, useContext, useEffect } from 'react';
import * as content from '../data/portfolio.js';

const ContentContext = createContext(content);

// Single-language (English) provider; components read all copy through useContent().
export function LanguageProvider({ children }) {
  useEffect(() => {
    document.title = `${content.profile.name} · ${content.profile.primaryRole}`;
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}
