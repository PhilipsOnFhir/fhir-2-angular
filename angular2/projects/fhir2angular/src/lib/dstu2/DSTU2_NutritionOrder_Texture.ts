import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_NutritionOrder_Texture      extends DSTU2_BackboneElement
{

   static def : string = 'NutritionOrder_Texture';
   modifier : DSTU2_CodeableConcept ;
   foodType : DSTU2_CodeableConcept ;
}
