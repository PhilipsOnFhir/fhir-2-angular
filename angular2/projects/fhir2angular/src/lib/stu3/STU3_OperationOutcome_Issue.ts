import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_IssueSeverityEnum } from './STU3_IssueSeverityEnum'
import { STU3_IssueTypeEnum } from './STU3_IssueTypeEnum'

export class STU3_OperationOutcome_Issue      extends STU3_BackboneElement
{

   static def : string = 'OperationOutcome_Issue';
   severity : STU3_IssueSeverityEnum ;
   code : STU3_IssueTypeEnum ;
   details : STU3_CodeableConcept ;
   diagnostics : string ;
   location : string [];
   expression : string [];
}
