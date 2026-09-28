import React from 'react';

interface LanguageSwitcherProps {
  currentLang: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="flex gap-2 bg-neutral-900 p-1.5 rounded-lg border border-neutral-800">
      <button
        onClick={() => onLanguageChange('es')}
        className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
          currentLang === 'es' ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
        }`}
      >
        ES 🇦🇷
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
          currentLang === 'en' ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
        }`}
      >
        EN 🇺🇸
      </button>
    </div>
  );
};