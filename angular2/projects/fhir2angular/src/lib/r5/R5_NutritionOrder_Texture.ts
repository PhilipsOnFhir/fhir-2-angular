import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_NutritionOrder_Texture      extends R5_BackboneElement
{

   static def : string = 'NutritionOrder_Texture';
   modifier : R5_CodeableConcept ;
   foodType : R5_CodeableConcept ;
}
