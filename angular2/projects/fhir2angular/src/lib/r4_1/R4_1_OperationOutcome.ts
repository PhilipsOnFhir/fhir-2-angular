import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_OperationOutcome_Issue } from './R4_1_OperationOutcome_Issue'

export class R4_1_OperationOutcome      extends R4_1_DomainResource
{

   static def : string = 'OperationOutcome';
   issue : R4_1_OperationOutcome_Issue [];
}
