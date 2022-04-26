import { FinalExecutionOutcome } from "near-api-js/lib/providers";

export interface TransactionStatusResult {
  found: boolean;
  success?: boolean;
  errorMessage?: string;
  data?: TransactionError;
  finalExecutionOutcome?: FinalExecutionOutcome;
  method?: string;

  transactionExplorerUrl?: string;
}

interface TransactionError {
  message: string;
  type: string;
}
