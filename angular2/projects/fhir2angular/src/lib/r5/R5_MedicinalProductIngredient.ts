import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicinalProductIngredient_SpecifiedSubstance } from './R5_MedicinalProductIngredient_SpecifiedSubstance'
import { R5_MedicinalProductIngredient_Substance } from './R5_MedicinalProductIngredient_Substance'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductIngredient      extends R5_DomainResource
{

   static def : string = 'MedicinalProductIngredient';
   identifier : R5_Identifier ;
   role : R5_CodeableConcept ;
   allergenicIndicator : boolean ;
   manufacturer : R5_Reference [];
   specifiedSubstance : R5_MedicinalProductIngredient_SpecifiedSubstance [];
   substance : R5_MedicinalProductIngredient_Substance ;
}
