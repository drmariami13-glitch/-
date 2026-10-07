import React from 'react';
import { Heart, Clock } from 'lucide-react';
import { Recipe } from '../types/recipe';
import { ImageWithFallback } from './ImageWithFallback';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  onSelect: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isFavorite,
  onToggleFavorite,
  onSelect
}) => {
  return (
    <article
      onClick={() => onSelect(recipe)}
      className="group cursor-pointer bg-white rounded-md border border-[#E7E2D9] overflow-hidden flex flex-col transition-all duration-200 hover:border-[#D1C9BC] hover:shadow-sm"
    >
      {/* Visual Hero: Food Photography */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE8DF]">
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Favorite Button */}
        <button
          onClick={(e) => onToggleFavorite(e, recipe.id)}
          aria-label={isFavorite ? 'რჩეულებიდან ამოშლა' : 'რჩეულებში დამატება'}
          className={`cursor-pointer absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-150 backdrop-blur-xs ${
            isFavorite
              ? 'bg-white text-[#B87961] shadow-xs'
              : 'bg-black/25 text-white hover:bg-black/40'
          }`}
        >
          <Heart
            className={`w-4 h-4 transition-transform duration-200 ${
              isFavorite ? 'fill-[#B87961] scale-110' : 'scale-100'
            }`}
          />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Unboxed Metadata Row */}
          <div className="flex items-center gap-2 text-xs text-[#6F6A62] font-mono mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#7C8B70]" />
              <span>{recipe.totalTime} წთ</span>
            </span>
            <span aria-hidden="true" className="text-[#C8C2B5]">·</span>
            <span className="tabular-nums font-medium text-[#222222]">
              {recipe.protein}გ ცილა
            </span>
            <span aria-hidden="true" className="text-[#C8C2B5]">·</span>
            <span className="tabular-nums text-[#6F6A62]">
              ~{recipe.calories} კკალ
            </span>
          </div>

          {/* Dish Name */}
          <h3 className="font-serif text-lg font-semibold text-[#222222] group-hover:text-[#7C8B70] transition-colors leading-snug line-clamp-2">
            {recipe.name}
          </h3>

          {/* Short Description */}
          <p className="mt-1.5 text-xs sm:text-sm text-[#6F6A62] leading-relaxed line-clamp-2">
            {recipe.shortDescription}
          </p>
        </div>

        {/* Subtle Bottom Note */}
        <div className="mt-4 pt-3 border-t border-[#F1ECE3] flex items-center justify-between text-xs text-[#6F6A62]">
          <span>{recipe.difficulty}</span>
          <span className="text-[#7C8B70] font-medium group-hover:underline">რეცეპტის ნახვა →</span>
        </div>
      </div>
    </article>
  );
};
