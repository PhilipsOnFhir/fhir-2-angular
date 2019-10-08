import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { NutritionIntakeStatusCodesEnum } from './NutritionIntakeStatusCodesEnum'
import { NutritionIntake_ConsumedItem } from './NutritionIntake_ConsumedItem'
import { NutritionIntake_IngredientLabel } from './NutritionIntake_IngredientLabel'
import { Period } from './Period'
import { Reference } from './Reference'

export class NutritionIntake      extends DomainResource
{

   static def : string = 'NutritionIntake';
   identifier : Identifier [];
   basedOn : Reference [];
   partOf : Reference [];
   status : NutritionIntakeStatusCodesEnum ;
   statusReason : CodeableConcept [];
   category : CodeableConcept [];
   consumedItem : NutritionIntake_ConsumedItem [];
   ingredientLabel : NutritionIntake_IngredientLabel [];
   subject : Reference ;
   encounter : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   dateAsserted : string ;
   informationSource : Reference ;
   derivedFrom : Reference [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
}
