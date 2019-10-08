import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DetectedIssueSeverityEnum } from './DSTU2_DetectedIssueSeverityEnum'
import { DSTU2_DetectedIssue_Mitigation } from './DSTU2_DetectedIssue_Mitigation'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DetectedIssue      extends DSTU2_DomainResource
{

   static def : string = 'DetectedIssue';
   patient : DSTU2_Reference ;
   category : DSTU2_CodeableConcept ;
   severity : DSTU2_DetectedIssueSeverityEnum ;
   implicated : DSTU2_Reference [];
   detail : string ;
   date : string ;
   author : DSTU2_Reference ;
   identifier : DSTU2_Identifier ;
   reference : string ;
   mitigation : DSTU2_DetectedIssue_Mitigation [];
}
