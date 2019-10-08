import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Dosage } from './R4_Dosage'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicationStatusCodesEnum } from './R4_MedicationStatusCodesEnum'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationStatement      extends R4_DomainResource
{

   static def : string = 'MedicationStatement';
   identifier : R4_Identifier [];
   basedOn : R4_Reference [];
   partOf : R4_Reference [];
   status : R4_MedicationStatusCodesEnum ;
   statusReason : R4_CodeableConcept [];
   category : R4_CodeableConcept ;
   medicationCodeableConcept : R4_CodeableConcept ;
   medicationReference : R4_Reference ;
   subject : R4_Reference ;
   context : R4_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R4_Period ;
   dateAsserted : string ;
   informationSource : R4_Reference ;
   derivedFrom : R4_Reference [];
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   note : R4_Annotation [];
   dosage : R4_Dosage [];
}
