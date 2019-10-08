import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductIngredient_Strength } from './R4_MedicinalProductIngredient_Strength'

export class R4_MedicinalProductIngredient_Substance      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_Substance';
   code : R4_CodeableConcept ;
   strength : R4_MedicinalProductIngredient_Strength [];
}
