import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_NutritionOrder_Nutrient      extends R5_BackboneElement
{

   static def : string = 'NutritionOrder_Nutrient';
   modifier : R5_CodeableConcept ;
   amount : R5_Quantity ;
}
