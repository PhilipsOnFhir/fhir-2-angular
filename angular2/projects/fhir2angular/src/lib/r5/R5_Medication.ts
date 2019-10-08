import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicationStatusCodesEnum } from './R5_MedicationStatusCodesEnum'
import { R5_Medication_Batch } from './R5_Medication_Batch'
import { R5_Medication_Ingredient } from './R5_Medication_Ingredient'
import { R5_Ratio } from './R5_Ratio'
import { R5_Reference } from './R5_Reference'

export class R5_Medication      extends R5_DomainResource
{

   static def : string = 'Medication';
   identifier : R5_Identifier [];
   code : R5_CodeableConcept ;
   status : R5_MedicationStatusCodesEnum ;
   manufacturer : R5_Reference ;
   form : R5_CodeableConcept ;
   amount : R5_Ratio ;
   ingredient : R5_Medication_Ingredient [];
   batch : R5_Medication_Batch ;
}
