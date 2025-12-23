

export interface UserProfile {
  id: number
  names: string;
  email: string;
  current_pass_id: string;
  current_pass_power: number
  wallet_addr: string;
  referral_code: string;
  has_pass: boolean; 
}

export interface PassInfo {
  passId: bigint;
  pass_type: string;
  price_wei: bigint;
  points: bigint;
  exists: boolean;
}

export interface DigiPass {
  pass_id: number;
  id: string;
  name: string;
  usd_price: string;
  pass_type: string;
  point_power: number;
  card: string;
  bnb_price: number;
}