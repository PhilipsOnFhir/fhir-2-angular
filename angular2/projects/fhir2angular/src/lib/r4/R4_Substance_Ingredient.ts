import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'

export class R4_Substance_Ingredient      extends R4_BackboneElement
{

   static def : string = 'Substance_Ingredient';
   quantity : R4_Ratio ;
   substanceCodeableConcept : R4_CodeableConcept ;
   substanceReference : R4_Reference ;
}
