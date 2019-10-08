import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_IssueSeverityEnum } from './DSTU2_IssueSeverityEnum'
import { DSTU2_IssueTypeEnum } from './DSTU2_IssueTypeEnum'

export class DSTU2_OperationOutcome_Issue      extends DSTU2_BackboneElement
{

   static def : string = 'OperationOutcome_Issue';
   severity : DSTU2_IssueSeverityEnum ;
   code : DSTU2_IssueTypeEnum ;
   details : DSTU2_CodeableConcept ;
   diagnostics : string ;
   location : string [];
}
