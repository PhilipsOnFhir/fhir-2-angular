import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_NutritionOrder_Administration } from './R4_1_NutritionOrder_Administration'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_NutritionOrder_EnteralFormula      extends R4_1_BackboneElement
{

   static def : string = 'NutritionOrder_EnteralFormula';
   baseFormulaType : R4_1_CodeableConcept ;
   baseFormulaProductName : string ;
   additiveType : R4_1_CodeableConcept ;
   additiveProductName : string ;
   caloricDensity : R4_1_Quantity ;
   routeofAdministration : R4_1_CodeableConcept ;
   administration : R4_1_NutritionOrder_Administration [];
   maxVolumeToDeliver : R4_1_Quantity ;
   administrationInstruction : string ;
}
