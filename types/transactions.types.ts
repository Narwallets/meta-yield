export interface TransactionStatusResult {
  found: boolean;
  success: boolean;
  error?: TransactionError;
  transactionExplorerUrl?: string;
}

interface TransactionError {
  message: string;
  type: string;
}
