import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_SubstanceSpecification_Official      extends R4_BackboneElement
{

   static def : string = 'SubstanceSpecification_Official';
   authority : R4_CodeableConcept ;
   status : R4_CodeableConcept ;
   date : string ;
}
