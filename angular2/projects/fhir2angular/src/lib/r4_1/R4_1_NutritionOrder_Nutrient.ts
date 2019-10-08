import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_NutritionOrder_Nutrient      extends R4_1_BackboneElement
{

   static def : string = 'NutritionOrder_Nutrient';
   modifier : R4_1_CodeableConcept ;
   amount : R4_1_Quantity ;
}
