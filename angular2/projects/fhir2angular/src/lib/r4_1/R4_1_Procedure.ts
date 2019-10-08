import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EventStatusEnum } from './R4_1_EventStatusEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Procedure_FocalDevice } from './R4_1_Procedure_FocalDevice'
import { R4_1_Procedure_Performer } from './R4_1_Procedure_Performer'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Procedure      extends R4_1_DomainResource
{

   static def : string = 'Procedure';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_1_Reference [];
   partOf : R4_1_Reference [];
   status : R4_1_EventStatusEnum ;
   statusReason : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept ;
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   performedDateTime : string ;
   performedPeriod : R4_1_Period ;
   performedString : string ;
   performedAge : string ;
   performedRange : R4_1_Range ;
   recorder : R4_1_Reference ;
   asserter : R4_1_Reference ;
   performer : R4_1_Procedure_Performer [];
   location : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   bodySite : R4_1_CodeableConcept [];
   outcome : R4_1_CodeableConcept ;
   report : R4_1_Reference [];
   complication : R4_1_CodeableConcept [];
   complicationDetail : R4_1_Reference [];
   followUp : R4_1_CodeableConcept [];
   note : R4_1_Annotation [];
   focalDevice : R4_1_Procedure_FocalDevice [];
   usedReference : R4_1_Reference [];
   usedCode : R4_1_CodeableConcept [];
}
