import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Ratio } from './R5_Ratio'
import { R5_Timing } from './R5_Timing'

export class R5_NutritionOrder_Administration      extends R5_BackboneElement
{

   static def : string = 'NutritionOrder_Administration';
   schedule : R5_Timing ;
   quantity : R5_Quantity ;
   rateQuantity : R5_Quantity ;
   rateRatio : R5_Ratio ;
}
