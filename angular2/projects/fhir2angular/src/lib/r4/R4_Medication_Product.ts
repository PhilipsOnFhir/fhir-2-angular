import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Medication_Batch } from './R4_Medication_Batch'
import { R4_Medication_Ingredient } from './R4_Medication_Ingredient'

export class R4_Medication_Product      extends R4_BackboneElement
{

   static def : string = 'Medication_Product';
   form : R4_CodeableConcept ;
   ingredient : R4_Medication_Ingredient [];
   batch : R4_Medication_Batch [];
}
