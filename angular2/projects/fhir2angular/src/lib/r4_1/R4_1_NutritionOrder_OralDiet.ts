import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_NutritionOrder_Nutrient } from './R4_1_NutritionOrder_Nutrient'
import { R4_1_NutritionOrder_Texture } from './R4_1_NutritionOrder_Texture'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_NutritionOrder_OralDiet      extends R4_1_BackboneElement
{

   static def : string = 'NutritionOrder_OralDiet';
   type : R4_1_CodeableConcept [];
   schedule : R4_1_Timing [];
   nutrient : R4_1_NutritionOrder_Nutrient [];
   texture : R4_1_NutritionOrder_Texture [];
   fluidConsistencyType : R4_1_CodeableConcept [];
   instruction : string ;
}
