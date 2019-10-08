import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_OperationOutcome_Issue } from './STU3_OperationOutcome_Issue'

export class STU3_OperationOutcome      extends STU3_DomainResource
{

   static def : string = 'OperationOutcome';
   issue : STU3_OperationOutcome_Issue [];
}
