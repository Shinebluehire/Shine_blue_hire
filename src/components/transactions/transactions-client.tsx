'use client';

import { useState } from 'react';
import type { Transaction } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { columns } from './columns';
import { DataTable } from './data-table';

export function TransactionsClient({ initialTransactions }: { initialTransactions: Transaction[] }) {
  const [transactions, setTransactions] = useState(initialTransactions);
  const { toast } = useToast();

  const handleUpdateCategory = (transactionId: string, category: string) => {
    setTransactions(prev =>
      prev.map(t => (t.id === transactionId ? { ...t, category } : t))
    );
  };
  
  const handleSaveChanges = () => {
    // Here you would typically make an API call to save the changes.
    // We'll simulate it with a toast.
    toast({
      title: 'Changes Saved',
      description: 'Your transaction categories have been updated.',
    });
  };

  return (
    <div className="space-y-4">
       <div className="flex justify-end">
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>
      <DataTable
        columns={columns({ onCategoryChange: handleUpdateCategory })}
        data={transactions}
      />
    </div>
  );
}
