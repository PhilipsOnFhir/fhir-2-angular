import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_NutritionOrder_Texture      extends R4_1_BackboneElement
{

   static def : string = 'NutritionOrder_Texture';
   modifier : R4_1_CodeableConcept ;
   foodType : R4_1_CodeableConcept ;
}
