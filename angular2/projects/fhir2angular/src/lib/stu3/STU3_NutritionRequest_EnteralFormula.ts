import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_NutritionRequest_Administration } from './STU3_NutritionRequest_Administration'
import { STU3_Quantity } from './STU3_Quantity'

export class STU3_NutritionRequest_EnteralFormula      extends STU3_BackboneElement
{

   static def : string = 'NutritionRequest_EnteralFormula';
   baseFormulaType : STU3_CodeableConcept ;
   baseFormulaProductName : string ;
   additiveType : STU3_CodeableConcept ;
   additiveProductName : string ;
   caloricDensity : STU3_Quantity ;
   routeofAdministration : STU3_CodeableConcept ;
   administration : STU3_NutritionRequest_Administration [];
   maxVolumeToDeliver : STU3_Quantity ;
   administrationInstruction : string ;
}
