import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Substance_Ingredient      extends STU3_BackboneElement
{

   static def : string = 'Substance_Ingredient';
   quantity : STU3_Ratio ;
   substanceCodeableConcept : STU3_CodeableConcept ;
   substanceReference : STU3_Reference ;
}
