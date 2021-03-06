import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_NutritionOrderStatusEnum } from './STU3_NutritionOrderStatusEnum'
import { STU3_NutritionRequest_EnteralFormula } from './STU3_NutritionRequest_EnteralFormula'
import { STU3_NutritionRequest_OralDiet } from './STU3_NutritionRequest_OralDiet'
import { STU3_NutritionRequest_Supplement } from './STU3_NutritionRequest_Supplement'
import { STU3_Reference } from './STU3_Reference'

export class STU3_NutritionRequest      extends STU3_DomainResource
{

   static def : string = 'NutritionRequest';
   identifier : STU3_Identifier [];
   status : STU3_NutritionOrderStatusEnum ;
   patient : STU3_Reference ;
   encounter : STU3_Reference ;
   dateTime : string ;
   orderer : STU3_Reference ;
   allergyIntolerance : STU3_Reference [];
   foodPreferenceModifier : STU3_CodeableConcept [];
   excludeFoodModifier : STU3_CodeableConcept [];
   oralDiet : STU3_NutritionRequest_OralDiet ;
   supplement : STU3_NutritionRequest_Supplement [];
   enteralFormula : STU3_NutritionRequest_EnteralFormula ;
}
