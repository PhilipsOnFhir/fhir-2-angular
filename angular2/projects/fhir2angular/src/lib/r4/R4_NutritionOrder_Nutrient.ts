import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'

export class R4_NutritionOrder_Nutrient      extends R4_BackboneElement
{

   static def : string = 'NutritionOrder_Nutrient';
   modifier : R4_CodeableConcept ;
   amount : R4_Quantity ;
}
