import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EventStatusEnum } from './R4_EventStatusEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Procedure_FocalDevice } from './R4_Procedure_FocalDevice'
import { R4_Procedure_Performer } from './R4_Procedure_Performer'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'

export class R4_Procedure      extends R4_DomainResource
{

   static def : string = 'Procedure';
   identifier : R4_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_Reference [];
   partOf : R4_Reference [];
   status : R4_EventStatusEnum ;
   statusReason : R4_CodeableConcept ;
   category : R4_CodeableConcept ;
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   performedDateTime : string ;
   performedPeriod : R4_Period ;
   performedString : string ;
   performedAge : string ;
   performedRange : R4_Range ;
   recorder : R4_Reference ;
   asserter : R4_Reference ;
   performer : R4_Procedure_Performer [];
   location : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   bodySite : R4_CodeableConcept [];
   outcome : R4_CodeableConcept ;
   report : R4_Reference [];
   complication : R4_CodeableConcept [];
   complicationDetail : R4_Reference [];
   followUp : R4_CodeableConcept [];
   note : R4_Annotation [];
   focalDevice : R4_Procedure_FocalDevice [];
   usedReference : R4_Reference [];
   usedCode : R4_CodeableConcept [];
}
