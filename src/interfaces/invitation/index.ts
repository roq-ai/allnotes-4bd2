import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  invited_email: string;
  status: string;
  business_id: string;
  user_id: string;
  role?: string;
  invitation_code?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  invited_email?: string;
  status?: string;
  business_id?: string;
  user_id?: string;
  role?: string;
  invitation_code?: string;
}
