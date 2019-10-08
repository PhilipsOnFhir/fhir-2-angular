import { R5_AdverseEventActualityEnum } from './R5_AdverseEventActualityEnum'
import { R5_AdverseEvent_SuspectEntity } from './R5_AdverseEvent_SuspectEntity'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_AdverseEvent      extends R5_DomainResource
{

   static def : string = 'AdverseEvent';
   identifier : R5_Identifier ;
   actuality : R5_AdverseEventActualityEnum ;
   category : R5_CodeableConcept [];
   event : R5_CodeableConcept ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   date : string ;
   detected : string ;
   recordedDate : string ;
   resultingCondition : R5_Reference [];
   location : R5_Reference ;
   seriousness : R5_CodeableConcept ;
   severity : R5_CodeableConcept ;
   outcome : R5_CodeableConcept ;
   recorder : R5_Reference ;
   contributor : R5_Reference [];
   suspectEntity : R5_AdverseEvent_SuspectEntity [];
   subjectMedicalHistory : R5_Reference [];
   referenceDocument : R5_Reference [];
   study : R5_Reference [];
}
