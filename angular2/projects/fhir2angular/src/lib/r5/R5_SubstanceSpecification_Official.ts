import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_SubstanceSpecification_Official      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Official';
   authority : R5_CodeableConcept ;
   status : R5_CodeableConcept ;
   date : string ;
}
