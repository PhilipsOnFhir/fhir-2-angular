import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicationStatusCodesEnum } from './R4_MedicationStatusCodesEnum'
import { R4_Medication_Batch } from './R4_Medication_Batch'
import { R4_Medication_Ingredient } from './R4_Medication_Ingredient'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'

export class R4_Medication      extends R4_DomainResource
{

   static def : string = 'Medication';
   identifier : R4_Identifier [];
   code : R4_CodeableConcept ;
   status : R4_MedicationStatusCodesEnum ;
   manufacturer : R4_Reference ;
   form : R4_CodeableConcept ;
   amount : R4_Ratio ;
   ingredient : R4_Medication_Ingredient [];
   batch : R4_Medication_Batch ;
}
