import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Ingredient_Strength } from './Ingredient_Strength'
import { Reference } from './Reference'

export class Ingredient_SpecifiedSubstance      extends BackboneElement
{

   static def : string = 'Ingredient_SpecifiedSubstance';
   codeCodeableConcept : CodeableConcept ;
   codeReference : Reference ;
   group : CodeableConcept ;
   confidentiality : CodeableConcept ;
   strength : Ingredient_Strength [];
}
