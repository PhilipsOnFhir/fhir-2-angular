import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_NutritionOrder_Supplement      extends DSTU2_BackboneElement
{

   static def : string = 'NutritionOrder_Supplement';
   type : DSTU2_CodeableConcept ;
   productName : string ;
   schedule : DSTU2_Timing [];
   quantity : DSTU2_SimpleQuantity ;
   instruction : string ;
}
