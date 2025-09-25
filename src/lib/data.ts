import { cache } from "react";
import type { Transaction } from "./types";

// A simple hashing function for deterministic IDs.
const simpleHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
};

export const getTransactions = cache(async (): Promise<Transaction[]> => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Shinebluehire/Shine_blue_hire/main/transactions.json"
    );
    if (!response.ok) {
      console.error("Failed to fetch transactions:", response.statusText);
      return [];
    }
    const data: Omit<Transaction, "id">[] = await response.json();

    // Add a unique, deterministic ID to each transaction
    return data.map((tx) => ({
      ...tx,
      id: simpleHash(`${tx.date}-${tx.description}-${tx.amount}`),
    }));
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
});
