export interface TransactionStatusResult {
  success: boolean;
  error?: TransactionError;
}

interface TransactionError {
  message: string;
  type: string;
}
