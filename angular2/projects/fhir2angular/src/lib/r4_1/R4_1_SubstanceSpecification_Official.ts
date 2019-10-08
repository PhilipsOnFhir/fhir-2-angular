import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_SubstanceSpecification_Official      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Official';
   authority : R4_1_CodeableConcept ;
   status : R4_1_CodeableConcept ;
   date : string ;
}
