import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_IssueSeverityEnum } from './R4_1_IssueSeverityEnum'
import { R4_1_IssueTypeEnum } from './R4_1_IssueTypeEnum'

export class R4_1_OperationOutcome_Issue      extends R4_1_BackboneElement
{

   static def : string = 'OperationOutcome_Issue';
   severity : R4_1_IssueSeverityEnum ;
   code : R4_1_IssueTypeEnum ;
   details : R4_1_CodeableConcept ;
   diagnostics : string ;
   location : string [];
   expression : string [];
}
