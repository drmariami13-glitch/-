import React from 'react';
import { Sparkles, ShoppingBag, Heart } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenRandom: () => void;
  favoritesCount: number;
  shoppingItemsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenRandom,
  favoritesCount,
  shoppingItemsCount
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#E7E2D9] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onSelectTab('home')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C8B70] rounded-sm py-1"
          aria-label="მთავარ გვერდზე გადასვლა"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] group-hover:text-[#7C8B70] transition-colors">
            ჩვენი მენიუ
          </span>
        </button>

        {/* Zone 2: Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#6F6A62]">
          <button
            onClick={() => onSelectTab('home')}
            className={`cursor-pointer transition-colors hover:text-[#222222] py-1 ${
              activeTab === 'home' ? 'text-[#222222] font-semibold border-b-2 border-[#7C8B70]' : ''
            }`}
          >
            მთავარი
          </button>
          <button
            onClick={() => onSelectTab('breakfast')}
            className={`cursor-pointer transition-colors hover:text-[#222222] py-1 ${
              activeTab === 'breakfast' ? 'text-[#222222] font-semibold border-b-2 border-[#7C8B70]' : ''
            }`}
          >
            საუზმე
          </button>
          <button
            onClick={() => onSelectTab('lunch')}
            className={`cursor-pointer transition-colors hover:text-[#222222] py-1 ${
              activeTab === 'lunch' ? 'text-[#222222] font-semibold border-b-2 border-[#7C8B70]' : ''
            }`}
          >
            სადილი
          </button>
          <button
            onClick={() => onSelectTab('dessert')}
            className={`cursor-pointer transition-colors hover:text-[#222222] py-1 ${
              activeTab === 'dessert' ? 'text-[#222222] font-semibold border-b-2 border-[#7C8B70]' : ''
            }`}
          >
            დესერტი
          </button>
          <button
            onClick={() => onSelectTab('weekly')}
            className={`cursor-pointer transition-colors hover:text-[#222222] py-1 ${
              activeTab === 'weekly' ? 'text-[#222222] font-semibold border-b-2 border-[#7C8B70]' : ''
            }`}
          >
            კვირის მენიუ
          </button>
          <button
            onClick={() => onSelectTab('favorites')}
            className={`cursor-pointer transition-colors hover:text-[#222222] py-1 flex items-center gap-1.5 ${
              activeTab === 'favorites' ? 'text-[#222222] font-semibold border-b-2 border-[#7C8B70]' : ''
            }`}
          >
            <span>რჩეულები</span>
            {favoritesCount > 0 && (
              <span className="text-xs text-[#B87961] font-mono tabular-nums">
                ({favoritesCount})
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenRandom}
            className="cursor-pointer flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#7C8B70] hover:bg-[#6C7B60] active:scale-[0.98] transition-all rounded-md shadow-xs whitespace-nowrap"
            title="შემთხვევითი კერძის შერჩევა"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>რა მოვამზადო?</span>
          </button>

          <button
            onClick={() => onSelectTab('shopping')}
            className={`cursor-pointer relative p-2 text-[#222222] hover:bg-[#EFECE5] rounded-md transition-colors ${
              activeTab === 'shopping' ? 'bg-[#EFECE5] text-[#7C8B70]' : ''
            }`}
            aria-label="საყიდლების სია"
            title="საყიდლების სია"
          >
            <ShoppingBag className="w-5 h-5" />
            {shoppingItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B87961] text-white text-[10px] font-mono font-bold rounded-full flex items-center justify-center">
                {shoppingItemsCount > 9 ? '9+' : shoppingItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
