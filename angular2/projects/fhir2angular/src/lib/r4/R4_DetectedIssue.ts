import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DetectedIssueSeverityEnum } from './R4_DetectedIssueSeverityEnum'
import { R4_DetectedIssue_Evidence } from './R4_DetectedIssue_Evidence'
import { R4_DetectedIssue_Mitigation } from './R4_DetectedIssue_Mitigation'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ObservationStatusEnum } from './R4_ObservationStatusEnum'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_DetectedIssue      extends R4_DomainResource
{

   static def : string = 'DetectedIssue';
   identifier : R4_Identifier [];
   status : R4_ObservationStatusEnum ;
   code : R4_CodeableConcept ;
   severity : R4_DetectedIssueSeverityEnum ;
   patient : R4_Reference ;
   identifiedDateTime : string ;
   identifiedPeriod : R4_Period ;
   author : R4_Reference ;
   implicated : R4_Reference [];
   evidence : R4_DetectedIssue_Evidence [];
   detail : string ;
   reference : string ;
   mitigation : R4_DetectedIssue_Mitigation [];
}
