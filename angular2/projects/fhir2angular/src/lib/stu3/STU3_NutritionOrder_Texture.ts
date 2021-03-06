import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_NutritionOrder_Texture      extends STU3_BackboneElement
{

   static def : string = 'NutritionOrder_Texture';
   modifier : STU3_CodeableConcept ;
   foodType : STU3_CodeableConcept ;
}
