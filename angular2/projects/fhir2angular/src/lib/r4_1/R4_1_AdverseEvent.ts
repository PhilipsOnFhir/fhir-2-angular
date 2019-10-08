import { R4_1_AdverseEventActualityEnum } from './R4_1_AdverseEventActualityEnum'
import { R4_1_AdverseEvent_SuspectEntity } from './R4_1_AdverseEvent_SuspectEntity'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_AdverseEvent      extends R4_1_DomainResource
{

   static def : string = 'AdverseEvent';
   identifier : R4_1_Identifier ;
   actuality : R4_1_AdverseEventActualityEnum ;
   category : R4_1_CodeableConcept [];
   event : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   date : string ;
   detected : string ;
   recordedDate : string ;
   resultingCondition : R4_1_Reference [];
   location : R4_1_Reference ;
   seriousness : R4_1_CodeableConcept ;
   severity : R4_1_CodeableConcept ;
   outcome : R4_1_CodeableConcept ;
   recorder : R4_1_Reference ;
   contributor : R4_1_Reference [];
   suspectEntity : R4_1_AdverseEvent_SuspectEntity [];
   subjectMedicalHistory : R4_1_Reference [];
   referenceDocument : R4_1_Reference [];
   study : R4_1_Reference [];
}
