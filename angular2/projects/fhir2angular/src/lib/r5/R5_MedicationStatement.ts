import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage } from './R5_Dosage'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicationStatusCodesEnum } from './R5_MedicationStatusCodesEnum'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationStatement      extends R5_DomainResource
{

   static def : string = 'MedicationStatement';
   identifier : R5_Identifier [];
   basedOn : R5_Reference [];
   partOf : R5_Reference [];
   status : R5_MedicationStatusCodesEnum ;
   statusReason : R5_CodeableConcept [];
   category : R5_CodeableConcept ;
   medicationCodeableConcept : R5_CodeableConcept ;
   medicationReference : R5_Reference ;
   subject : R5_Reference ;
   context : R5_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R5_Period ;
   dateAsserted : string ;
   informationSource : R5_Reference ;
   derivedFrom : R5_Reference [];
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   note : R5_Annotation [];
   dosage : R5_Dosage [];
}
