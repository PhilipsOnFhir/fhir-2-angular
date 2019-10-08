import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class SubstanceDefinition_Code      extends BackboneElement
{

   static def : string = 'SubstanceDefinition_Code';
   code : CodeableConcept ;
   status : CodeableConcept ;
   statusDate : string ;
   comment : string ;
   source : Reference [];
}
