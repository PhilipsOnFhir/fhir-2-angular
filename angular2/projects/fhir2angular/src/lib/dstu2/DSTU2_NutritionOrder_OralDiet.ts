import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_NutritionOrder_Nutrient } from './DSTU2_NutritionOrder_Nutrient'
import { DSTU2_NutritionOrder_Texture } from './DSTU2_NutritionOrder_Texture'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_NutritionOrder_OralDiet      extends DSTU2_BackboneElement
{

   static def : string = 'NutritionOrder_OralDiet';
   type : DSTU2_CodeableConcept [];
   schedule : DSTU2_Timing [];
   nutrient : DSTU2_NutritionOrder_Nutrient [];
   texture : DSTU2_NutritionOrder_Texture [];
   fluidConsistencyType : DSTU2_CodeableConcept [];
   instruction : string ;
}
