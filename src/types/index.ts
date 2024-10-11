export interface WalletDetails {
    cardinal_address: string;
    cardinal_pubkey: string;
    ordinal_address: string;
    ordinal_pubkey: string;
    connected?: boolean;
    wallet: string | null;
  }
  
  export interface AccountType {
    vault: string;
    ordinal_address: string;
  }