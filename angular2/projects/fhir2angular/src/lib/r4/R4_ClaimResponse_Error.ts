import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ClaimResponse_Error      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_Error';
   itemSequence : string ;
   detailSequence : string ;
   subDetailSequence : string ;
   code : R4_CodeableConcept ;
}
