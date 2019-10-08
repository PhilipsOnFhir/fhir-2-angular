import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DetectedIssueSeverityEnum } from './R5_DetectedIssueSeverityEnum'
import { R5_DetectedIssue_Evidence } from './R5_DetectedIssue_Evidence'
import { R5_DetectedIssue_Mitigation } from './R5_DetectedIssue_Mitigation'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ObservationStatusEnum } from './R5_ObservationStatusEnum'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_DetectedIssue      extends R5_DomainResource
{

   static def : string = 'DetectedIssue';
   identifier : R5_Identifier [];
   status : R5_ObservationStatusEnum ;
   code : R5_CodeableConcept ;
   severity : R5_DetectedIssueSeverityEnum ;
   patient : R5_Reference ;
   identifiedDateTime : string ;
   identifiedPeriod : R5_Period ;
   author : R5_Reference ;
   implicated : R5_Reference [];
   evidence : R5_DetectedIssue_Evidence [];
   detail : string ;
   reference : string ;
   mitigation : R5_DetectedIssue_Mitigation [];
}
