import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_SubstanceSpecification_Code      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Code';
   code : R4_1_CodeableConcept ;
   status : R4_1_CodeableConcept ;
   statusDate : string ;
   comment : string ;
   source : R4_1_Reference [];
}
