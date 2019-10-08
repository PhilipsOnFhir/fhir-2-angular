import { R5_DomainResource } from './R5_DomainResource'
import { R5_OperationOutcome_Issue } from './R5_OperationOutcome_Issue'

export class R5_OperationOutcome      extends R5_DomainResource
{

   static def : string = 'OperationOutcome';
   issue : R5_OperationOutcome_Issue [];
}
