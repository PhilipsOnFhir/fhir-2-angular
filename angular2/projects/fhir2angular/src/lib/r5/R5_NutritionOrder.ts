import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_NutritionOrder_EnteralFormula } from './R5_NutritionOrder_EnteralFormula'
import { R5_NutritionOrder_OralDiet } from './R5_NutritionOrder_OralDiet'
import { R5_NutritionOrder_Supplement } from './R5_NutritionOrder_Supplement'
import { R5_Reference } from './R5_Reference'
import { R5_RequestIntentEnum } from './R5_RequestIntentEnum'
import { R5_RequestStatusEnum } from './R5_RequestStatusEnum'

export class R5_NutritionOrder      extends R5_DomainResource
{

   static def : string = 'NutritionOrder';
   identifier : R5_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   instantiates : string [];
   status : R5_RequestStatusEnum ;
   intent : R5_RequestIntentEnum ;
   patient : R5_Reference ;
   encounter : R5_Reference ;
   dateTime : string ;
   orderer : R5_Reference ;
   allergyIntolerance : R5_Reference [];
   foodPreferenceModifier : R5_CodeableConcept [];
   excludeFoodModifier : R5_CodeableConcept [];
   oralDiet : R5_NutritionOrder_OralDiet ;
   supplement : R5_NutritionOrder_Supplement [];
   enteralFormula : R5_NutritionOrder_EnteralFormula ;
   note : R5_Annotation [];
}
