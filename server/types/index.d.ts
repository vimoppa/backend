import { AccountsDBFields, BoardMetadata, Organisation } from './repositories';

declare global {
  namespace Express {
    export interface Request {
      authenticatedAccount: AccountsDBFields | undefined;
      isSysAdmin: boolean;
      authenticatedOrganisation: Organisation | undefined;
      isOrganisationAdmin: boolean;
      authenticatedBoard: BoardMetadata | undefined;
    }
  }
}
