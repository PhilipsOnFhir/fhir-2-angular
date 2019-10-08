import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_NutritionOrder_Supplement      extends R4_1_BackboneElement
{

   static def : string = 'NutritionOrder_Supplement';
   type : R4_1_CodeableConcept ;
   productName : string ;
   schedule : R4_1_Timing [];
   quantity : R4_1_Quantity ;
   instruction : string ;
}
