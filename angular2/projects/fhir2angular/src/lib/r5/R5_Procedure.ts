import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EventStatusEnum } from './R5_EventStatusEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Procedure_FocalDevice } from './R5_Procedure_FocalDevice'
import { R5_Procedure_Performer } from './R5_Procedure_Performer'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'

export class R5_Procedure      extends R5_DomainResource
{

   static def : string = 'Procedure';
   identifier : R5_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R5_Reference [];
   partOf : R5_Reference [];
   status : R5_EventStatusEnum ;
   statusReason : R5_CodeableConcept ;
   category : R5_CodeableConcept ;
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   performedDateTime : string ;
   performedPeriod : R5_Period ;
   performedString : string ;
   performedAge : string ;
   performedRange : R5_Range ;
   recorder : R5_Reference ;
   asserter : R5_Reference ;
   performer : R5_Procedure_Performer [];
   location : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   bodySite : R5_CodeableConcept [];
   outcome : R5_CodeableConcept ;
   report : R5_Reference [];
   complication : R5_CodeableConcept [];
   complicationDetail : R5_Reference [];
   followUp : R5_CodeableConcept [];
   note : R5_Annotation [];
   focalDevice : R5_Procedure_FocalDevice [];
   usedReference : R5_Reference [];
   usedCode : R5_CodeableConcept [];
}
