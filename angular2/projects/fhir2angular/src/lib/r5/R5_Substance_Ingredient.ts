import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Ratio } from './R5_Ratio'
import { R5_Reference } from './R5_Reference'

export class R5_Substance_Ingredient      extends R5_BackboneElement
{

   static def : string = 'Substance_Ingredient';
   quantity : R5_Ratio ;
   substanceCodeableConcept : R5_CodeableConcept ;
   substanceReference : R5_Reference ;
}
