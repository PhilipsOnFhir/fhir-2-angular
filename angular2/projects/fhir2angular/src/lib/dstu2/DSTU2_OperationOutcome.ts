import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_OperationOutcome_Issue } from './DSTU2_OperationOutcome_Issue'

export class DSTU2_OperationOutcome      extends DSTU2_DomainResource
{

   static def : string = 'OperationOutcome';
   issue : DSTU2_OperationOutcome_Issue [];
}
