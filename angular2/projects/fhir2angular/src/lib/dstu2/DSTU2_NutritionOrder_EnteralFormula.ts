import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_NutritionOrder_Administration } from './DSTU2_NutritionOrder_Administration'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_NutritionOrder_EnteralFormula      extends DSTU2_BackboneElement
{

   static def : string = 'NutritionOrder_EnteralFormula';
   baseFormulaType : DSTU2_CodeableConcept ;
   baseFormulaProductName : string ;
   additiveType : DSTU2_CodeableConcept ;
   additiveProductName : string ;
   caloricDensity : DSTU2_SimpleQuantity ;
   routeofAdministration : DSTU2_CodeableConcept ;
   administration : DSTU2_NutritionOrder_Administration [];
   maxVolumeToDeliver : DSTU2_SimpleQuantity ;
   administrationInstruction : string ;
}
