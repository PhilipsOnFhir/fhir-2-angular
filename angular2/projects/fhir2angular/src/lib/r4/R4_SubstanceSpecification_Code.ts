import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_SubstanceSpecification_Code      extends R4_BackboneElement
{

   static def : string = 'SubstanceSpecification_Code';
   code : R4_CodeableConcept ;
   status : R4_CodeableConcept ;
   statusDate : string ;
   comment : string ;
   source : R4_Reference [];
}
