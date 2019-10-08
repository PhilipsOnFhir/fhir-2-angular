import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Timing } from './STU3_Timing'

export class STU3_NutritionRequest_Supplement      extends STU3_BackboneElement
{

   static def : string = 'NutritionRequest_Supplement';
   type : STU3_CodeableConcept ;
   productName : string ;
   schedule : STU3_Timing [];
   quantity : STU3_Quantity ;
   instruction : string ;
}
