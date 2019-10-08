import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class NutritionIntake_IngredientLabel      extends BackboneElement
{

   static def : string = 'NutritionIntake_IngredientLabel';
   nutrient : CodeableConcept ;
   amount : Quantity ;
}
