import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'

export class STU3_NutritionRequest_Nutrient      extends STU3_BackboneElement
{

   static def : string = 'NutritionRequest_Nutrient';
   modifier : STU3_CodeableConcept ;
   amount : STU3_Quantity ;
}
