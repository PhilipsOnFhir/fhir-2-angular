import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_NutritionOrder_Texture      extends R4_BackboneElement
{

   static def : string = 'NutritionOrder_Texture';
   modifier : R4_CodeableConcept ;
   foodType : R4_CodeableConcept ;
}
