'use client';

import { useState, useEffect, useCallback } from 'react';

interface LetterIntroProps {
  onComplete: () => void;
}

const letterText = `Hi, I'm Mary Ann, an owner of DMA Healthy Vending, a family owned business. My husband, Dennis, and I are lifelong residents of the East Bay and ardent advocates of healthy vending.

You've all seen the stats on increasing rates of childhood and adult obesity rates. The good news is that change is coming. Schools are providing more nutritious meals and more and more gyms, schools, and facilities are looking at healthy vending as a way to promote wellness and healthy eating. This is where we come in.

At DMA Healthy Vending, we bring a healthy vending option to gyms, schools, and facilities in the Bay Area. We can place our healthy vending machine next to traditional snack and drink machines or we can replace the junk food machines with our healthier option.

If you are interested in receiving more information or you would like us to visit your facility, call us directly at 925 785-6000.

Have a Healthy Day!`;

export default function LetterIntro({ onComplete }: LetterIntroProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);

  useEffect(() => {
    // Fade in the container
    setIsVisible(true);
    // Prevent body scroll when letter is showing
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (isSkipping) {
      setDisplayedText(letterText);
      setIsComplete(true);
      return;
    }

    if (displayedText.length < letterText.length) {
      // Calculate delay based on character type for more natural feel
      const currentChar = letterText[displayedText.length];
      let delay = 8; // Base delay in ms - much faster!

      // Shorter delays for punctuation and line breaks
      if (currentChar === '.' || currentChar === '!' || currentChar === '?') {
        delay = 40;
      } else if (currentChar === ',' || currentChar === ';') {
        delay = 20;
      } else if (currentChar === '\n') {
        delay = 30;
      } else if (currentChar === ' ') {
        delay = 10;
      }

      const timer = setTimeout(() => {
        setDisplayedText(letterText.slice(0, displayedText.length + 1));
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, letterText, isSkipping]);

  useEffect(() => {
    if (isComplete) {
      // Auto-redirect after 1 minute (60 seconds)
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 500); // Wait for fade out animation
      }, 60000); // Wait 1 minute before auto-redirect

      return () => clearTimeout(timer);
    }
  }, [isComplete, onComplete]);

  const handleSkip = useCallback(() => {
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSkipping(true);
    setIsComplete(true);
    // Immediately complete and hide
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 100);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Skip button - centered at bottom */}
      <button
        onClick={handleSkip}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 text-sm font-medium text-white hover:text-emerald-300 bg-slate-800/90 hover:bg-slate-700/90 rounded-full shadow-lg transition-all duration-200 border border-slate-600 hover:border-emerald-500 z-50 backdrop-blur-sm"
        aria-label="Skip introduction"
      >
        Skip Introduction →
      </button>

      {/* Letter container - fixed size from start */}
      <div className="w-full max-w-3xl mx-4 px-4 sm:px-8 py-6 sm:py-8 bg-slate-800/95 rounded-2xl shadow-2xl border-2 border-slate-700/50 relative overflow-hidden backdrop-blur-sm h-[650px] sm:h-[700px] flex flex-col">
        {/* Decorative paper texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.05) 2px,
              rgba(255,255,255,0.05) 4px
            )`
          }}></div>
        </div>

        {/* Letter content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Handwriting cursor effect */}
          <div className="mb-6 flex-shrink-0">
            <div className="text-emerald-400 text-base sm:text-lg font-semibold mb-2">
              A Letter from Mary Ann
            </div>
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-transparent"></div>
          </div>

          {/* Letter text with handwriting font - fixed height container */}
          <div className="text-slate-100 text-lg sm:text-xl leading-relaxed whitespace-pre-wrap flex-1" style={{ fontFamily: 'var(--font-hand)', fontWeight: 400 }}>
            {displayedText}
            {!isComplete && (
              <span className="inline-block w-0.5 h-6 bg-emerald-400 ml-1 animate-pulse align-middle"></span>
            )}
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-emerald-500/30 rounded-br-lg"></div>
      </div>
    </div>
  );
}

