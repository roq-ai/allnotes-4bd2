import { DataInterface } from 'interfaces/data';
import { InvitationInterface } from 'interfaces/invitation';
import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  data?: DataInterface[];
  invitation?: InvitationInterface[];
  transaction?: TransactionInterface[];
  user?: UserInterface;
  _count?: {
    data?: number;
    invitation?: number;
    transaction?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
