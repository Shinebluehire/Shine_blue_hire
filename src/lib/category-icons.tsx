import type { LucideIcon } from 'lucide-react';
import {
  Landmark,
  Utensils,
  Clapperboard,
  Wrench,
  Car,
  ShoppingCart,
  HeartPulse,
  LineChart,
  Tag,
} from 'lucide-react';

export const categoryIcons: Record<string, LucideIcon> = {
  Salary: Landmark,
  Food: Utensils,
  Entertainment: Clapperboard,
  Utilities: Wrench,
  Transport: Car,
  Shopping: ShoppingCart,
  Health: HeartPulse,
  Investment: LineChart,
  default: Tag,
};

export const getCategoryIcon = (category: string) => {
  return categoryIcons[category] || categoryIcons.default;
};
