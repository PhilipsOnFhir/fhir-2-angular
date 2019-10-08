import { STU3_AdverseEventCategoryEnum } from './STU3_AdverseEventCategoryEnum'
import { STU3_AdverseEvent_SuspectEntity } from './STU3_AdverseEvent_SuspectEntity'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_AdverseEvent      extends STU3_DomainResource
{

   static def : string = 'AdverseEvent';
   identifier : STU3_Identifier ;
   category : STU3_AdverseEventCategoryEnum ;
   type : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   date : string ;
   reaction : STU3_Reference [];
   location : STU3_Reference ;
   seriousness : STU3_CodeableConcept ;
   outcome : STU3_CodeableConcept ;
   recorder : STU3_Reference ;
   eventParticipant : STU3_Reference ;
   description : string ;
   suspectEntity : STU3_AdverseEvent_SuspectEntity [];
   subjectMedicalHistory : STU3_Reference [];
   referenceDocument : STU3_Reference [];
   study : STU3_Reference [];
}
