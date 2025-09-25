'use client';

import type { ColumnDef } from '@tanstack/react-table';
import type { Transaction } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { getCategoryIcon } from '@/lib/category-icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categoryIcons } from '@/lib/category-icons';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

const availableCategories = Object.keys(categoryIcons).filter(c => c !== 'default');

type ColumnsProps = {
  onCategoryChange: (transactionId: string, newCategory: string) => void;
};

export const columns = ({ onCategoryChange }: ColumnsProps): ColumnDef<Transaction>[] => [
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const Icon = getCategoryIcon(row.original.category);
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
          <span className="font-medium">{row.original.description}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => formatDate(row.original.date),
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      return (
        <div
          className={`text-right font-medium ${
            amount > 0 ? 'text-green-600' : 'text-foreground'
          }`}
        >
          {formatCurrency(amount)}
        </div>
      );
    },
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => (
      <Select
        value={row.original.category}
        onValueChange={(value) => onCategoryChange(row.original.id, value)}
      >
        <SelectTrigger className="w-[180px] text-xs">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {availableCategories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ),
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => (
      <Badge
        variant={row.original.type === 'income' ? 'default' : 'secondary'}
        className={row.original.type === 'income' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : ''}
      >
        {row.original.type}
      </Badge>
    ),
  },
];
