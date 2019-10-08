import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Dosage } from './R4_1_Dosage'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicationStatusCodesEnum } from './R4_1_MedicationStatusCodesEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicationStatement      extends R4_1_DomainResource
{

   static def : string = 'MedicationStatement';
   identifier : R4_1_Identifier [];
   basedOn : R4_1_Reference [];
   partOf : R4_1_Reference [];
   status : R4_1_MedicationStatusCodesEnum ;
   statusReason : R4_1_CodeableConcept [];
   category : R4_1_CodeableConcept ;
   medicationCodeableConcept : R4_1_CodeableConcept ;
   medicationReference : R4_1_Reference ;
   subject : R4_1_Reference ;
   context : R4_1_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R4_1_Period ;
   dateAsserted : string ;
   informationSource : R4_1_Reference ;
   derivedFrom : R4_1_Reference [];
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   note : R4_1_Annotation [];
   dosage : R4_1_Dosage [];
}
