import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicationStatusCodesEnum } from './R4_1_MedicationStatusCodesEnum'
import { R4_1_Medication_Batch } from './R4_1_Medication_Batch'
import { R4_1_Medication_Ingredient } from './R4_1_Medication_Ingredient'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Medication      extends R4_1_DomainResource
{

   static def : string = 'Medication';
   identifier : R4_1_Identifier [];
   code : R4_1_CodeableConcept ;
   status : R4_1_MedicationStatusCodesEnum ;
   manufacturer : R4_1_Reference ;
   form : R4_1_CodeableConcept ;
   amount : R4_1_Ratio ;
   ingredient : R4_1_Medication_Ingredient [];
   batch : R4_1_Medication_Batch ;
}
