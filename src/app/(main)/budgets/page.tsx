import { getTransactions } from '@/lib/data';
import { BudgetsClient } from '@/components/budgets/budgets-client';

export default async function BudgetsPage() {
  const transactions = await getTransactions();
  
  return (
    <div className="space-y-6">
      <BudgetsClient transactions={transactions} />
    </div>
  );
}
