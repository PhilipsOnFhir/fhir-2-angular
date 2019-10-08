import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_NutritionOrder_Nutrient } from './R4_NutritionOrder_Nutrient'
import { R4_NutritionOrder_Texture } from './R4_NutritionOrder_Texture'
import { R4_Timing } from './R4_Timing'

export class R4_NutritionOrder_OralDiet      extends R4_BackboneElement
{

   static def : string = 'NutritionOrder_OralDiet';
   type : R4_CodeableConcept [];
   schedule : R4_Timing [];
   nutrient : R4_NutritionOrder_Nutrient [];
   texture : R4_NutritionOrder_Texture [];
   fluidConsistencyType : R4_CodeableConcept [];
   instruction : string ;
}
