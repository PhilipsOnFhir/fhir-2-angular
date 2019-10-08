import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_NutritionOrder_EnteralFormula } from './R4_NutritionOrder_EnteralFormula'
import { R4_NutritionOrder_OralDiet } from './R4_NutritionOrder_OralDiet'
import { R4_NutritionOrder_Supplement } from './R4_NutritionOrder_Supplement'
import { R4_Reference } from './R4_Reference'
import { R4_RequestIntentEnum } from './R4_RequestIntentEnum'
import { R4_RequestStatusEnum } from './R4_RequestStatusEnum'

export class R4_NutritionOrder      extends R4_DomainResource
{

   static def : string = 'NutritionOrder';
   identifier : R4_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   instantiates : string [];
   status : R4_RequestStatusEnum ;
   intent : R4_RequestIntentEnum ;
   patient : R4_Reference ;
   encounter : R4_Reference ;
   dateTime : string ;
   orderer : R4_Reference ;
   allergyIntolerance : R4_Reference [];
   foodPreferenceModifier : R4_CodeableConcept [];
   excludeFoodModifier : R4_CodeableConcept [];
   oralDiet : R4_NutritionOrder_OralDiet ;
   supplement : R4_NutritionOrder_Supplement [];
   enteralFormula : R4_NutritionOrder_EnteralFormula ;
   note : R4_Annotation [];
}
