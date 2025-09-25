export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
};

export type Budget = {
  id: string;
  category: string;
  amount: number;
};
