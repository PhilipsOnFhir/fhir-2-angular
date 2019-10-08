import { R4_DomainResource } from './R4_DomainResource'
import { R4_OperationOutcome_Issue } from './R4_OperationOutcome_Issue'

export class R4_OperationOutcome      extends R4_DomainResource
{

   static def : string = 'OperationOutcome';
   issue : R4_OperationOutcome_Issue [];
}
