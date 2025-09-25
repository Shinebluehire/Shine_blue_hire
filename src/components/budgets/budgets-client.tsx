'use client';

import { useState } from 'react';
import type { Budget, Transaction } from '@/lib/types';
import { CreateBudget } from './create-budget';
import { BudgetCard } from './budget-card';
import { PartyPopper } from 'lucide-react';

const initialBudgets: Budget[] = [
  { id: '1', category: 'Food', amount: 500 },
  { id: '2', category: 'Shopping', amount: 300 },
  { id: '3', category: 'Transport', amount: 150 },
];

export function BudgetsClient({ transactions }: { transactions: Transaction[] }) {
  const [budgets, setBudgets] = useState<Budget[]>(initialBudgets);

  const handleCreateBudget = (newBudget: Omit<Budget, 'id'>) => {
    setBudgets([
      ...budgets,
      { ...newBudget, id: crypto.randomUUID() },
    ]);
  };

  const expensesByCategory = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => {
      if (!acc[t.category]) {
        acc[t.category] = 0;
      }
      acc[t.category] += Math.abs(t.amount);
      return acc;
    }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Budgets</h1>
        <CreateBudget onCreateBudget={handleCreateBudget} />
      </div>
      
      {budgets.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {budgets.map((budget) => (
            <BudgetCard
              key={budget.id}
              budget={budget}
              spent={expensesByCategory[budget.category] || 0}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 p-12 text-center">
          <PartyPopper className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-xl font-semibold">No Budgets Yet!</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            Create your first budget to start tracking your spending.
          </p>
          <CreateBudget onCreateBudget={handleCreateBudget} variant="default" />
        </div>
      )}
    </div>
  );
}
