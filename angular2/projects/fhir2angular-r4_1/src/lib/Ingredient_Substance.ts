import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Ingredient_Strength } from './Ingredient_Strength'
import { Reference } from './Reference'

export class Ingredient_Substance      extends BackboneElement
{

   static def : string = 'Ingredient_Substance';
   codeCodeableConcept : CodeableConcept ;
   codeReference : Reference ;
   strength : Ingredient_Strength [];
}
