import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Ingredient_SpecifiedSubstance } from './Ingredient_SpecifiedSubstance'
import { Ingredient_Substance } from './Ingredient_Substance'
import { Reference } from './Reference'

export class Ingredient      extends DomainResource
{

   static def : string = 'Ingredient';
   identifier : Identifier ;
   role : CodeableConcept ;
   allergenicIndicator : boolean ;
   manufacturer : Reference [];
   specifiedSubstance : Ingredient_SpecifiedSubstance [];
   substance : Ingredient_Substance ;
}
