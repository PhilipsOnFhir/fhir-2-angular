import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ClaimResponse_Error      extends STU3_BackboneElement
{

   static def : string = 'ClaimResponse_Error';
   sequenceLinkId : string ;
   detailSequenceLinkId : string ;
   subdetailSequenceLinkId : string ;
   code : STU3_CodeableConcept ;
}
