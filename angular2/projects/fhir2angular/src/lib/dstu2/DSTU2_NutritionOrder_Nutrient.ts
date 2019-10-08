import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_NutritionOrder_Nutrient      extends DSTU2_BackboneElement
{

   static def : string = 'NutritionOrder_Nutrient';
   modifier : DSTU2_CodeableConcept ;
   amount : DSTU2_SimpleQuantity ;
}
