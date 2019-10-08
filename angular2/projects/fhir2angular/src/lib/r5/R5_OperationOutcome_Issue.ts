import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_IssueSeverityEnum } from './R5_IssueSeverityEnum'
import { R5_IssueTypeEnum } from './R5_IssueTypeEnum'

export class R5_OperationOutcome_Issue      extends R5_BackboneElement
{

   static def : string = 'OperationOutcome_Issue';
   severity : R5_IssueSeverityEnum ;
   code : R5_IssueTypeEnum ;
   details : R5_CodeableConcept ;
   diagnostics : string ;
   location : string [];
   expression : string [];
}
