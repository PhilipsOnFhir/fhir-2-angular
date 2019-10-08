import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_NutritionOrder_EnteralFormula } from './R4_1_NutritionOrder_EnteralFormula'
import { R4_1_NutritionOrder_OralDiet } from './R4_1_NutritionOrder_OralDiet'
import { R4_1_NutritionOrder_Supplement } from './R4_1_NutritionOrder_Supplement'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestIntentEnum } from './R4_1_RequestIntentEnum'
import { R4_1_RequestStatusEnum } from './R4_1_RequestStatusEnum'

export class R4_1_NutritionOrder      extends R4_1_DomainResource
{

   static def : string = 'NutritionOrder';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   instantiates : string [];
   status : R4_1_RequestStatusEnum ;
   intent : R4_1_RequestIntentEnum ;
   patient : R4_1_Reference ;
   encounter : R4_1_Reference ;
   dateTime : string ;
   orderer : R4_1_Reference ;
   allergyIntolerance : R4_1_Reference [];
   foodPreferenceModifier : R4_1_CodeableConcept [];
   excludeFoodModifier : R4_1_CodeableConcept [];
   oralDiet : R4_1_NutritionOrder_OralDiet ;
   supplement : R4_1_NutritionOrder_Supplement [];
   enteralFormula : R4_1_NutritionOrder_EnteralFormula ;
   note : R4_1_Annotation [];
}
