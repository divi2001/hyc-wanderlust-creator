import React, { useEffect } from 'react';

// ===== GoogleTranslate.jsx - UPDATED VERSION =====
const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,mr,hi,bn,te,ta,kn,ml,gu',
        autoDisplay: false, // Added this to prevent auto-display
      },
      'google_translate_element'
    );
  };

  useEffect(() => {
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const addScript = document.createElement('script');
      addScript.id = scriptId;
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      addScript.async = true;
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }

    // Add CSS to hide Google Translate elements
    const style = document.createElement('style');
    style.innerHTML = `
      /* Hide Google Translate banner */
      .goog-te-banner-frame {
        display: none !important;
      }
      
      /* Hide the top frame */
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      
      /* Remove top padding/margin that Google adds */
      body {
        top: 0 !important;
        position: static !important;
      }
      
      /* Hide the original Google widget */
      #google_translate_element {
        display: none !important;
      }
      
      /* Hide any iframe created by Google Translate */
      iframe.goog-te-banner-frame {
        display: none !important;
      }
      
      /* Additional safety - hide skiptranslate iframes */
      iframe.skiptranslate {
        display: none !important;
      }
      
      /* Ensure body doesn't get shifted */
      body.translated-ltr {
        top: 0 !important;
      }
      
      body.translated-rtl {
        top: 0 !important;
      }
    `;
    document.head.appendChild(style);

    // Observer to continuously remove the banner
    const observer = new MutationObserver(() => {
      // Remove banner if it appears
      const banner = document.querySelector('.goog-te-banner-frame');
      if (banner && banner.style.display !== 'none') {
        banner.style.display = 'none';
        banner.remove();
      }

      // Reset body positioning
      if (document.body.style.top && document.body.style.top !== '0px') {
        document.body.style.top = '0px';
      }
      
      if (document.body.style.position === 'relative') {
        document.body.style.position = 'static';
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="google_translate_element" style={{ display: 'none' }}></div>
  );
};

export default GoogleTranslate;