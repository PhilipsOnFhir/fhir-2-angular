import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EventStatusEnum } from './STU3_EventStatusEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Procedure_FocalDevice } from './STU3_Procedure_FocalDevice'
import { STU3_Procedure_Performer } from './STU3_Procedure_Performer'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Procedure      extends STU3_DomainResource
{

   static def : string = 'Procedure';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   partOf : STU3_Reference [];
   status : STU3_EventStatusEnum ;
   notDone : boolean ;
   notDoneReason : STU3_CodeableConcept ;
   category : STU3_CodeableConcept ;
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   performedDateTime : string ;
   performedPeriod : STU3_Period ;
   performer : STU3_Procedure_Performer [];
   location : STU3_Reference ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   bodySite : STU3_CodeableConcept [];
   outcome : STU3_CodeableConcept ;
   report : STU3_Reference [];
   complication : STU3_CodeableConcept [];
   complicationDetail : STU3_Reference [];
   followUp : STU3_CodeableConcept [];
   note : STU3_Annotation [];
   focalDevice : STU3_Procedure_FocalDevice [];
   usedReference : STU3_Reference [];
   usedCode : STU3_CodeableConcept [];
}
