import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_NutritionOrder_Administration      extends R4_1_BackboneElement
{

   static def : string = 'NutritionOrder_Administration';
   schedule : R4_1_Timing ;
   quantity : R4_1_Quantity ;
   rateQuantity : R4_1_Quantity ;
   rateRatio : R4_1_Ratio ;
}
