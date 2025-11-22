import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

// ===== MODIFICATION: Language names updated to their native script =====
const languages = [
  { code: 'en', name: 'English' },
  { code: 'mr', name: 'मराठी' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' }, // Corrected spelling
  { code: 'gu', name: 'ગુજરાતી' },
];

const CustomLanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (langCode) => {
    const selected = languages.find(l => l.code === langCode);
    setSelectedLanguage(selected);
    setIsOpen(false);

    const googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event('change'));
    } else {
      let retries = 0;
      const interval = setInterval(() => {
        const googleSelectRetry = document.querySelector('.goog-te-combo');
        if (googleSelectRetry) {
          clearInterval(interval);
          googleSelectRetry.value = langCode;
          googleSelectRetry.dispatchEvent(new Event('change'));
        }
        retries++;
        if (retries > 10) {
          clearInterval(interval);
          console.error("Could not find Google Translate dropdown after multiple retries.");
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="notranslate relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLanguage.name}
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {languages.map((language) => (
              <a
                key={language.code}
                href="#"
                className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                onClick={(e) => {
                  e.preventDefault();
                  handleLanguageChange(language.code);
                }}
              >
                {language.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomLanguageSwitcher;