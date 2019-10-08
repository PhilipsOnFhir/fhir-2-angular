import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DetectedIssueSeverityEnum } from './STU3_DetectedIssueSeverityEnum'
import { STU3_DetectedIssue_Mitigation } from './STU3_DetectedIssue_Mitigation'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ObservationStatusEnum } from './STU3_ObservationStatusEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DetectedIssue      extends STU3_DomainResource
{

   static def : string = 'DetectedIssue';
   identifier : STU3_Identifier ;
   status : STU3_ObservationStatusEnum ;
   category : STU3_CodeableConcept ;
   severity : STU3_DetectedIssueSeverityEnum ;
   patient : STU3_Reference ;
   date : string ;
   author : STU3_Reference ;
   implicated : STU3_Reference [];
   detail : string ;
   reference : string ;
   mitigation : STU3_DetectedIssue_Mitigation [];
}
