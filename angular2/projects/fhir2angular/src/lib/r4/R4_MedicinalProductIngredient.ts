import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicinalProductIngredient_SpecifiedSubstance } from './R4_MedicinalProductIngredient_SpecifiedSubstance'
import { R4_MedicinalProductIngredient_Substance } from './R4_MedicinalProductIngredient_Substance'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductIngredient      extends R4_DomainResource
{

   static def : string = 'MedicinalProductIngredient';
   identifier : R4_Identifier ;
   role : R4_CodeableConcept ;
   allergenicIndicator : boolean ;
   manufacturer : R4_Reference [];
   specifiedSubstance : R4_MedicinalProductIngredient_SpecifiedSubstance [];
   substance : R4_MedicinalProductIngredient_Substance ;
}
