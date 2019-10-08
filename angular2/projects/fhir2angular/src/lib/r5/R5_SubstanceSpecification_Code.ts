import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_SubstanceSpecification_Code      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Code';
   code : R5_CodeableConcept ;
   status : R5_CodeableConcept ;
   statusDate : string ;
   comment : string ;
   source : R5_Reference [];
}
