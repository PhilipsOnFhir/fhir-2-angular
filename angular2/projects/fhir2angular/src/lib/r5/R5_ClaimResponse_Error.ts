import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ClaimResponse_Error      extends R5_BackboneElement
{

   static def : string = 'ClaimResponse_Error';
   itemSequence : string ;
   detailSequence : string ;
   subDetailSequence : string ;
   code : R5_CodeableConcept ;
}
