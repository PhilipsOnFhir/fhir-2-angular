import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicinalProductIngredient_SpecifiedSubstance } from './R4_1_MedicinalProductIngredient_SpecifiedSubstance'
import { R4_1_MedicinalProductIngredient_Substance } from './R4_1_MedicinalProductIngredient_Substance'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductIngredient      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductIngredient';
   identifier : R4_1_Identifier ;
   role : R4_1_CodeableConcept ;
   allergenicIndicator : boolean ;
   manufacturer : R4_1_Reference [];
   specifiedSubstance : R4_1_MedicinalProductIngredient_SpecifiedSubstance [];
   substance : R4_1_MedicinalProductIngredient_Substance ;
}
