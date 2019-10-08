import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_IssueSeverityEnum } from './R4_IssueSeverityEnum'
import { R4_IssueTypeEnum } from './R4_IssueTypeEnum'

export class R4_OperationOutcome_Issue      extends R4_BackboneElement
{

   static def : string = 'OperationOutcome_Issue';
   severity : R4_IssueSeverityEnum ;
   code : R4_IssueTypeEnum ;
   details : R4_CodeableConcept ;
   diagnostics : string ;
   location : string [];
   expression : string [];
}
