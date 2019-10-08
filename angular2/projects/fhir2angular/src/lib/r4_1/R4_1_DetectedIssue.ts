import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DetectedIssueSeverityEnum } from './R4_1_DetectedIssueSeverityEnum'
import { R4_1_DetectedIssue_Evidence } from './R4_1_DetectedIssue_Evidence'
import { R4_1_DetectedIssue_Mitigation } from './R4_1_DetectedIssue_Mitigation'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ObservationStatusEnum } from './R4_1_ObservationStatusEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DetectedIssue      extends R4_1_DomainResource
{

   static def : string = 'DetectedIssue';
   identifier : R4_1_Identifier [];
   status : R4_1_ObservationStatusEnum ;
   code : R4_1_CodeableConcept ;
   severity : R4_1_DetectedIssueSeverityEnum ;
   patient : R4_1_Reference ;
   identifiedDateTime : string ;
   identifiedPeriod : R4_1_Period ;
   author : R4_1_Reference ;
   implicated : R4_1_Reference [];
   evidence : R4_1_DetectedIssue_Evidence [];
   detail : string ;
   reference : string ;
   mitigation : R4_1_DetectedIssue_Mitigation [];
}
