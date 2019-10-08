import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Medication_Batch } from './DSTU2_Medication_Batch'
import { DSTU2_Medication_Ingredient } from './DSTU2_Medication_Ingredient'

export class DSTU2_Medication_Product      extends DSTU2_BackboneElement
{

   static def : string = 'Medication_Product';
   form : DSTU2_CodeableConcept ;
   ingredient : DSTU2_Medication_Ingredient [];
   batch : DSTU2_Medication_Batch [];
}
