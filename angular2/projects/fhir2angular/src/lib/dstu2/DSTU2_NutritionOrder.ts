import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_NutritionOrderStatusEnum } from './DSTU2_NutritionOrderStatusEnum'
import { DSTU2_NutritionOrder_EnteralFormula } from './DSTU2_NutritionOrder_EnteralFormula'
import { DSTU2_NutritionOrder_OralDiet } from './DSTU2_NutritionOrder_OralDiet'
import { DSTU2_NutritionOrder_Supplement } from './DSTU2_NutritionOrder_Supplement'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_NutritionOrder      extends DSTU2_DomainResource
{

   static def : string = 'NutritionOrder';
   patient : DSTU2_Reference ;
   orderer : DSTU2_Reference ;
   identifier : DSTU2_Identifier [];
   encounter : DSTU2_Reference ;
   dateTime : string ;
   status : DSTU2_NutritionOrderStatusEnum ;
   allergyIntolerance : DSTU2_Reference [];
   foodPreferenceModifier : DSTU2_CodeableConcept [];
   excludeFoodModifier : DSTU2_CodeableConcept [];
   oralDiet : DSTU2_NutritionOrder_OralDiet ;
   supplement : DSTU2_NutritionOrder_Supplement [];
   enteralFormula : DSTU2_NutritionOrder_EnteralFormula ;
}
