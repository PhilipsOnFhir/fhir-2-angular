import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductIngredient_Strength } from './R4_1_MedicinalProductIngredient_Strength'

export class R4_1_MedicinalProductIngredient_SpecifiedSubstance      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductIngredient_SpecifiedSubstance';
   code : R4_1_CodeableConcept ;
   group : R4_1_CodeableConcept ;
   confidentiality : R4_1_CodeableConcept ;
   strength : R4_1_MedicinalProductIngredient_Strength [];
}
