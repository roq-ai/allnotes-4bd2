import { UserInterface } from 'interfaces/user';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface DataInterface {
  id?: string;
  text?: string;
  number?: number;
  user_id: string;
  business_id: string;
  type?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  business?: BusinessInterface;
  _count?: {};
}

export interface DataGetQueryInterface extends GetQueryInterface {
  id?: string;
  text?: string;
  user_id?: string;
  business_id?: string;
  type?: string;
  status?: string;
}
