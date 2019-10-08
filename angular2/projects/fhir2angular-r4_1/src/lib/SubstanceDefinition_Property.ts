import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Reference } from './Reference'

export class SubstanceDefinition_Property      extends BackboneElement
{

   static def : string = 'SubstanceDefinition_Property';
   category : CodeableConcept ;
   code : CodeableConcept ;
   parameters : string ;
   definingSubstanceReference : Reference ;
   definingSubstanceCodeableConcept : CodeableConcept ;
   amountQuantity : Quantity ;
   amountString : string ;
   referenceRange : Range ;
   source : Reference [];
}
