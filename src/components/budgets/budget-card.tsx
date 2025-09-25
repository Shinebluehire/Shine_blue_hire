'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getCategoryIcon } from '@/lib/category-icons';
import type { Budget } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface BudgetCardProps {
  budget: Budget;
  spent: number;
}

export function BudgetCard({ budget, spent }: BudgetCardProps) {
  const remaining = budget.amount - spent;
  const progress = (spent / budget.amount) * 100;

  const Icon = getCategoryIcon(budget.category);

  let progressColor = 'bg-primary';
  if (progress > 75 && progress <= 90) {
    progressColor = 'bg-yellow-500';
  } else if (progress > 90) {
    progressColor = 'bg-red-500';
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{budget.category}</CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatCurrency(spent)}</div>
        <p className="text-xs text-muted-foreground">
          of {formatCurrency(budget.amount)}
        </p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <Progress value={progress} className="h-2 [&>*]:bg-primary" />
        <p
          className={`text-sm font-medium ${
            remaining >= 0 ? 'text-muted-foreground' : 'text-red-500'
          }`}
        >
          {formatCurrency(remaining)} {remaining >= 0 ? 'left' : 'over'}
        </p>
      </CardFooter>
    </Card>
  );
}
