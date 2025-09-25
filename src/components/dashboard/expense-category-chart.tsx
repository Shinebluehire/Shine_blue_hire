'use client';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Transaction } from '@/lib/types';

type ChartData = {
  name: string;
  value: number;
};

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

export function ExpenseCategoryChart({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const data: ChartData[] = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => {
      let categoryData = acc.find((d) => d.name === t.category);
      if (!categoryData) {
        categoryData = { name: t.category, value: 0 };
        acc.push(categoryData);
      }
      categoryData.value += Math.abs(t.amount);
      return acc;
    }, [] as ChartData[]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense by Category</CardTitle>
        <CardDescription>Your spending habits at a glance.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
