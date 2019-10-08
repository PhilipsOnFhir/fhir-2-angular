import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Ratio } from './Ratio'
import { Reference } from './Reference'

export class Ingredient_ReferenceStrength      extends BackboneElement
{

   static def : string = 'Ingredient_ReferenceStrength';
   substanceCodeableConcept : CodeableConcept ;
   substanceReference : Reference ;
   strength : Ratio ;
   strengthHighLimit : Ratio ;
   measurementPoint : string ;
   country : CodeableConcept [];
}
