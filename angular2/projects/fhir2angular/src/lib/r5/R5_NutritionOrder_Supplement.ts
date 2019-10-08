import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Timing } from './R5_Timing'

export class R5_NutritionOrder_Supplement      extends R5_BackboneElement
{

   static def : string = 'NutritionOrder_Supplement';
   type : R5_CodeableConcept ;
   productName : string ;
   schedule : R5_Timing [];
   quantity : R5_Quantity ;
   instruction : string ;
}
