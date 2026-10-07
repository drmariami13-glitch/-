import React from 'react';
import { Home, Coffee, UtensilsCrossed, Cake, CalendarDays, Heart } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  favoritesCount: number;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onSelectTab,
  favoritesCount
}) => {
  return (
    <nav
      aria-label="მობილური ნავიგაცია"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#F8F6F1]/95 backdrop-blur-md border-t border-[#E7E2D9] px-2 py-1 safe-area-bottom"
    >
      <div className="grid grid-cols-6 max-w-md mx-auto items-center">
        <button
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center justify-center py-1.5 min-h-[46px] rounded-sm transition-colors ${
            activeTab === 'home' ? 'text-[#7C8B70] font-semibold' : 'text-[#6F6A62]'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">მთავარი</span>
        </button>

        <button
          onClick={() => onSelectTab('breakfast')}
          className={`flex flex-col items-center justify-center py-1.5 min-h-[46px] rounded-sm transition-colors ${
            activeTab === 'breakfast' ? 'text-[#7C8B70] font-semibold' : 'text-[#6F6A62]'
          }`}
        >
          <Coffee className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">საუზმე</span>
        </button>

        <button
          onClick={() => onSelectTab('lunch')}
          className={`flex flex-col items-center justify-center py-1.5 min-h-[46px] rounded-sm transition-colors ${
            activeTab === 'lunch' ? 'text-[#7C8B70] font-semibold' : 'text-[#6F6A62]'
          }`}
        >
          <UtensilsCrossed className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">სადილი</span>
        </button>

        <button
          onClick={() => onSelectTab('dessert')}
          className={`flex flex-col items-center justify-center py-1.5 min-h-[46px] rounded-sm transition-colors ${
            activeTab === 'dessert' ? 'text-[#7C8B70] font-semibold' : 'text-[#6F6A62]'
          }`}
        >
          <Cake className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">დესერტი</span>
        </button>

        <button
          onClick={() => onSelectTab('weekly')}
          className={`flex flex-col items-center justify-center py-1.5 min-h-[46px] rounded-sm transition-colors ${
            activeTab === 'weekly' ? 'text-[#7C8B70] font-semibold' : 'text-[#6F6A62]'
          }`}
        >
          <CalendarDays className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">მენიუ</span>
        </button>

        <button
          onClick={() => onSelectTab('favorites')}
          className={`flex flex-col items-center justify-center py-1.5 min-h-[46px] relative rounded-sm transition-colors ${
            activeTab === 'favorites' ? 'text-[#7C8B70] font-semibold' : 'text-[#6F6A62]'
          }`}
        >
          <Heart className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">რჩეული</span>
          {favoritesCount > 0 && (
            <span className="absolute top-1 right-2 w-2 h-2 bg-[#B87961] rounded-full" />
          )}
        </button>
      </div>
    </nav>
  );
};
