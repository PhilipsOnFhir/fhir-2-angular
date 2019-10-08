import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_NutritionRequest_Nutrient } from './STU3_NutritionRequest_Nutrient'
import { STU3_NutritionRequest_Texture } from './STU3_NutritionRequest_Texture'
import { STU3_Timing } from './STU3_Timing'

export class STU3_NutritionRequest_OralDiet      extends STU3_BackboneElement
{

   static def : string = 'NutritionRequest_OralDiet';
   type : STU3_CodeableConcept [];
   schedule : STU3_Timing [];
   nutrient : STU3_NutritionRequest_Nutrient [];
   texture : STU3_NutritionRequest_Texture [];
   fluidConsistencyType : STU3_CodeableConcept [];
   instruction : string ;
}
