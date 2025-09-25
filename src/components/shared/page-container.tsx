import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12', className)}>
      {children}
    </div>
  );
}
