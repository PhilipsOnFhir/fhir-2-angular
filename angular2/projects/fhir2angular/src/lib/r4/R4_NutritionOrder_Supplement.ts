import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Timing } from './R4_Timing'

export class R4_NutritionOrder_Supplement      extends R4_BackboneElement
{

   static def : string = 'NutritionOrder_Supplement';
   type : R4_CodeableConcept ;
   productName : string ;
   schedule : R4_Timing [];
   quantity : R4_Quantity ;
   instruction : string ;
}
