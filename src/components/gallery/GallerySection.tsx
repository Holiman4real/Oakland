import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Lightbox } from '../common/Lightbox';
import { GalleryItem } from '../../types/school';
import { Maximize2, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery, config } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const categories = [
    'All',
    'Students',
    'Classrooms',
    'School Events',
    'Sports',
    'Graduation',
  ];

  const filteredItems = selectedCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (indexInFiltered: number) => {
    setActivePhotoIndex(indexInFiltered);
    setLightboxOpen(true);
  };

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="py-20 bg-stone-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
            Moments in Focus
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-academic text-slate-900 tracking-tight">
            Life, Learning & Celebrations at {config.shortName}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            Experience our dynamic school life through snapshots of classroom discoveries, athletic victories, artistic showcases, and academic ceremonies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-stone-200/80 rounded-xl max-w-2xl mx-auto overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-slate-900 hover:bg-stone-300/60'
              }`}
            >
              {cat === 'All' ? 'All Photos' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-72"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover overlay with caption & lightbox trigger */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity p-6 flex flex-col justify-end text-white">
                <div className="space-y-1.5 transform group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      {item.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-serif leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-300 line-clamp-2">
                    {item.caption}
                  </p>

                  <div className="text-[11px] text-stone-400 pt-1">
                    {item.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </div>
  );
};
