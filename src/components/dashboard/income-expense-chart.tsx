'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Transaction } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

type ChartData = {
  month: string;
  income: number;
  expenses: number;
};

export function IncomeExpenseChart({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const data: ChartData[] = transactions
    .reduce((acc, t) => {
      const month = new Date(t.date).toLocaleString('default', {
        month: 'short',
      });
      let monthData = acc.find((d) => d.month === month);
      if (!monthData) {
        monthData = { month, income: 0, expenses: 0 };
        acc.push(monthData);
      }
      if (t.type === 'income') {
        monthData.income += t.amount;
      } else {
        monthData.expenses += Math.abs(t.amount);
      }
      return acc;
    }, [] as ChartData[])
    .sort(
      (a, b) =>
        new Date(`1 ${a.month} 2000`).getTime() -
        new Date(`1 ${b.month} 2000`).getTime()
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Income vs. Expenses</CardTitle>
        <CardDescription>A monthly breakdown of your cash flow.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis
              tickFormatter={(value) => formatCurrency(value as number).slice(0, -3)}
              width={80}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
              }}
              formatter={(value) => formatCurrency(value as number)}
            />
            <Legend />
            <Bar dataKey="income" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
