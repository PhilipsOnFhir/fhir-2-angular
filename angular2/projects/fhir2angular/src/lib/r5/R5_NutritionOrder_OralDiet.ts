import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_NutritionOrder_Nutrient } from './R5_NutritionOrder_Nutrient'
import { R5_NutritionOrder_Texture } from './R5_NutritionOrder_Texture'
import { R5_Timing } from './R5_Timing'

export class R5_NutritionOrder_OralDiet      extends R5_BackboneElement
{

   static def : string = 'NutritionOrder_OralDiet';
   type : R5_CodeableConcept [];
   schedule : R5_Timing [];
   nutrient : R5_NutritionOrder_Nutrient [];
   texture : R5_NutritionOrder_Texture [];
   fluidConsistencyType : R5_CodeableConcept [];
   instruction : string ;
}
