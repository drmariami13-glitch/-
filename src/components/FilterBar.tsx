import React, { useState } from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { Category, Difficulty } from '../types/recipe';

export interface FilterState {
  category: Category | 'all';
  maxTime: number | null; // e.g. 15, 30, 45, 60 or null
  proteinLevel: 'all' | 'high' | 'medium' | 'light';
  difficulty: Difficulty | 'all';
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onChange,
  totalCount
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const hasActiveAdvanced =
    filters.maxTime !== null ||
    filters.proteinLevel !== 'all' ||
    filters.difficulty !== 'all';

  const resetFilters = () => {
    onChange({
      category: 'all',
      maxTime: null,
      proteinLevel: 'all',
      difficulty: 'all'
    });
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Category Segmented Control & Advanced Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Categories */}
        <div className="inline-flex p-1 bg-[#EFECE5] rounded-lg text-xs sm:text-sm font-medium">
          <button
            onClick={() => onChange({ ...filters, category: 'all' })}
            className={`cursor-pointer px-3.5 py-1.5 rounded-md transition-all whitespace-nowrap ${
              filters.category === 'all'
                ? 'bg-white text-[#222222] shadow-2xs font-semibold'
                : 'text-[#6F6A62] hover:text-[#222222]'
            }`}
          >
            ყველა
          </button>
          <button
            onClick={() => onChange({ ...filters, category: 'breakfast' })}
            className={`cursor-pointer px-3.5 py-1.5 rounded-md transition-all whitespace-nowrap ${
              filters.category === 'breakfast'
                ? 'bg-white text-[#222222] shadow-2xs font-semibold'
                : 'text-[#6F6A62] hover:text-[#222222]'
            }`}
          >
            საუზმე
          </button>
          <button
            onClick={() => onChange({ ...filters, category: 'lunch' })}
            className={`cursor-pointer px-3.5 py-1.5 rounded-md transition-all whitespace-nowrap ${
              filters.category === 'lunch'
                ? 'bg-white text-[#222222] shadow-2xs font-semibold'
                : 'text-[#6F6A62] hover:text-[#222222]'
            }`}
          >
            სადილი
          </button>
          <button
            onClick={() => onChange({ ...filters, category: 'dessert' })}
            className={`cursor-pointer px-3.5 py-1.5 rounded-md transition-all whitespace-nowrap ${
              filters.category === 'dessert'
                ? 'bg-white text-[#222222] shadow-2xs font-semibold'
                : 'text-[#6F6A62] hover:text-[#222222]'
            }`}
          >
            დესერტი
          </button>
        </div>

        {/* Action Buttons: Advanced Filters & Reset */}
        <div className="flex items-center gap-2">
          {hasActiveAdvanced && (
            <button
              onClick={resetFilters}
              className="cursor-pointer flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#B87961] hover:text-[#9A5C46] transition-colors"
              title="ფილტრების გასუფთავება"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>გასუფთავება</span>
            </button>
          )}

          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`cursor-pointer flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-all ${
              showAdvanced || hasActiveAdvanced
                ? 'bg-white border-[#7C8B70] text-[#7C8B70]'
                : 'bg-white border-[#E7E2D9] text-[#6F6A62] hover:text-[#222222]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>ფილტრები</span>
            {hasActiveAdvanced && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C8B70]" />
            )}
          </button>

          <span className="text-xs text-[#6F6A62] font-mono tabular-nums hidden sm:inline">
            {totalCount} კერძი
          </span>
        </div>
      </div>

      {/* Advanced Filter Panel */}
      {showAdvanced && (
        <div className="p-4 bg-white border border-[#E7E2D9] rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs animate-in fade-in duration-150">
          {/* Time Filter */}
          <div>
            <label className="block font-medium text-[#222222] mb-1.5">
              მომზადების დრო
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: 'ნებისმიერი', val: null },
                { label: '15 წთ-მდე', val: 15 },
                { label: '30 წთ-მდე', val: 30 },
                { label: '45 წთ-მდე', val: 45 },
                { label: '1 სთ-მდე', val: 60 }
              ].map((opt) => (
                <button
                  key={String(opt.val)}
                  onClick={() => onChange({ ...filters, maxTime: opt.val })}
                  className={`cursor-pointer px-2.5 py-1 rounded text-xs transition-colors ${
                    filters.maxTime === opt.val
                      ? 'bg-[#7C8B70] text-white'
                      : 'bg-[#F4F1EA] text-[#6F6A62] hover:bg-[#EAE5DC]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Protein Filter */}
          <div>
            <label className="block font-medium text-[#222222] mb-1.5">
              ცილის შემცველობა
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: 'ყველა', val: 'all' as const },
                { label: 'მაღალი ცილა (≥25გ)', val: 'high' as const },
                { label: 'საშუალო (15–24გ)', val: 'medium' as const },
                { label: 'მსუბუქი (<15გ)', val: 'light' as const }
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => onChange({ ...filters, proteinLevel: opt.val })}
                  className={`cursor-pointer px-2.5 py-1 rounded text-xs transition-colors ${
                    filters.proteinLevel === opt.val
                      ? 'bg-[#7C8B70] text-white'
                      : 'bg-[#F4F1EA] text-[#6F6A62] hover:bg-[#EAE5DC]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block font-medium text-[#222222] mb-1.5">
              სირთულე
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: 'ყველა', val: 'all' as const },
                { label: 'მარტივი', val: 'მარტივი' as const },
                { label: 'საშუალო', val: 'საშუალო' as const },
                { label: 'შედარებით რთული', val: 'შედარებით რთული' as const }
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => onChange({ ...filters, difficulty: opt.val })}
                  className={`cursor-pointer px-2.5 py-1 rounded text-xs transition-colors ${
                    filters.difficulty === opt.val
                      ? 'bg-[#7C8B70] text-white'
                      : 'bg-[#F4F1EA] text-[#6F6A62] hover:bg-[#EAE5DC]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
