import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_NutritionOrder_Administration } from './R4_NutritionOrder_Administration'
import { R4_Quantity } from './R4_Quantity'

export class R4_NutritionOrder_EnteralFormula      extends R4_BackboneElement
{

   static def : string = 'NutritionOrder_EnteralFormula';
   baseFormulaType : R4_CodeableConcept ;
   baseFormulaProductName : string ;
   additiveType : R4_CodeableConcept ;
   additiveProductName : string ;
   caloricDensity : R4_Quantity ;
   routeofAdministration : R4_CodeableConcept ;
   administration : R4_NutritionOrder_Administration [];
   maxVolumeToDeliver : R4_Quantity ;
   administrationInstruction : string ;
}
