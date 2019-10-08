import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductIngredient_Strength } from './R5_MedicinalProductIngredient_Strength'

export class R5_MedicinalProductIngredient_Substance      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_Substance';
   code : R5_CodeableConcept ;
   strength : R5_MedicinalProductIngredient_Strength [];
}
