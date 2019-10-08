import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Ratio } from './DSTU2_Ratio'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_NutritionOrder_Administration      extends DSTU2_BackboneElement
{

   static def : string = 'NutritionOrder_Administration';
   schedule : DSTU2_Timing ;
   quantity : DSTU2_SimpleQuantity ;
   rateQuantity : DSTU2_SimpleQuantity ;
   rateRatio : DSTU2_Ratio ;
}
