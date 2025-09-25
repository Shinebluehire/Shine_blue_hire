import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  noSpacing?: boolean; // NEW
}

export function SectionContainer({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  noSpacing = false, // NEW
}: SectionContainerProps) {
  return (
    <section id={id} className={cn('py-12 md:py-16', className)}>
      {(title || subtitle) && (
        <div className="mb-8 md:mb-12 text-center">
          {subtitle && (
            <p className={cn('text-base md:text-lg font-medium text-accent mb-2 font-headline', subtitleClassName)}>
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className={cn('text-3xl md:text-4xl font-bold text-primary', titleClassName)}>
              {title}
            </h2>
          )}
        </div>
      )}
      <div className={cn(contentClassName)}>{children}</div>
    </section>
  );
}
