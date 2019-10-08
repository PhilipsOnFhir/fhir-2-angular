import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_NutritionOrder_Administration } from './R5_NutritionOrder_Administration'
import { R5_Quantity } from './R5_Quantity'

export class R5_NutritionOrder_EnteralFormula      extends R5_BackboneElement
{

   static def : string = 'NutritionOrder_EnteralFormula';
   baseFormulaType : R5_CodeableConcept ;
   baseFormulaProductName : string ;
   additiveType : R5_CodeableConcept ;
   additiveProductName : string ;
   caloricDensity : R5_Quantity ;
   routeofAdministration : R5_CodeableConcept ;
   administration : R5_NutritionOrder_Administration [];
   maxVolumeToDeliver : R5_Quantity ;
   administrationInstruction : string ;
}
