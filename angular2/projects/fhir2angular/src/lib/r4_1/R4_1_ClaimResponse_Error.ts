import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ClaimResponse_Error      extends R4_1_BackboneElement
{

   static def : string = 'ClaimResponse_Error';
   itemSequence : string ;
   detailSequence : string ;
   subDetailSequence : string ;
   code : R4_1_CodeableConcept ;
}
