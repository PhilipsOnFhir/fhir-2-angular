import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Ratio } from './R4_Ratio'
import { R4_Timing } from './R4_Timing'

export class R4_NutritionOrder_Administration      extends R4_BackboneElement
{

   static def : string = 'NutritionOrder_Administration';
   schedule : R4_Timing ;
   quantity : R4_Quantity ;
   rateQuantity : R4_Quantity ;
   rateRatio : R4_Ratio ;
}
