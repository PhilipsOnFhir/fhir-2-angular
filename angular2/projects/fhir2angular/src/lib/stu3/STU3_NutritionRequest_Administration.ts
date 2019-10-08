import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_Timing } from './STU3_Timing'

export class STU3_NutritionRequest_Administration      extends STU3_BackboneElement
{

   static def : string = 'NutritionRequest_Administration';
   schedule : STU3_Timing ;
   quantity : STU3_Quantity ;
   rateQuantity : STU3_Quantity ;
   rateRatio : STU3_Ratio ;
}
