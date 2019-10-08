import { R4_AdverseEventActualityEnum } from './R4_AdverseEventActualityEnum'
import { R4_AdverseEvent_SuspectEntity } from './R4_AdverseEvent_SuspectEntity'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_AdverseEvent      extends R4_DomainResource
{

   static def : string = 'AdverseEvent';
   identifier : R4_Identifier ;
   actuality : R4_AdverseEventActualityEnum ;
   category : R4_CodeableConcept [];
   event : R4_CodeableConcept ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   date : string ;
   detected : string ;
   recordedDate : string ;
   resultingCondition : R4_Reference [];
   location : R4_Reference ;
   seriousness : R4_CodeableConcept ;
   severity : R4_CodeableConcept ;
   outcome : R4_CodeableConcept ;
   recorder : R4_Reference ;
   contributor : R4_Reference [];
   suspectEntity : R4_AdverseEvent_SuspectEntity [];
   subjectMedicalHistory : R4_Reference [];
   referenceDocument : R4_Reference [];
   study : R4_Reference [];
}
