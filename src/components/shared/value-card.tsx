"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number; // For animation delay
  hoverable?: boolean;
}

export const ValueCard = ({
  icon: Icon,
  title,
  description,
  index = 0,
  hoverable = false,
}: ValueCardProps) => {
  return (
    <div
      className={cn(
        "flex items-start gap-5 transition-all duration-500 animate-fadeInSlideUp",
        hoverable && "hover:bg-primary/5 hover:shadow-md rounded-md p-4"
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full shadow-md">
        <Icon className="h-8 w-8 text-blue-700" />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
