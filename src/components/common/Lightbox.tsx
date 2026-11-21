import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { GalleryItem } from '../../types/school';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Reset zoom on index change
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6 transition-all"
    >
      {/* Top Bar with counter & controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Right Choice Gallery
          </span>
          <span className="text-sm text-stone-400">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed((prev) => !prev)}
            className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title={isZoomed ? 'Zoom out' : 'Zoom in'}
            aria-label="Toggle zoom"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Close Lightbox (Esc)"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-amber-600 transition-colors backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-amber-600 transition-colors backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image Viewport */}
      <div
        className="relative max-w-5xl max-h-[75vh] w-full flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => setIsZoomed((prev) => !prev)}
      >
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          referrerPolicy="no-referrer"
          className={`max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl transition-transform duration-300 ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
        />
      </div>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-4 left-4 right-4 text-center max-w-2xl mx-auto z-20 pointer-events-none">
        <div className="bg-stone-900/80 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 inline-block pointer-events-auto">
          <h4 className="text-white font-medium text-base sm:text-lg">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
            {currentItem.caption}
          </p>
          <div className="flex items-center justify-center gap-3 text-xs text-amber-400 mt-1.5">
            <span>{currentItem.category}</span>
            <span>·</span>
            <span>{currentItem.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
