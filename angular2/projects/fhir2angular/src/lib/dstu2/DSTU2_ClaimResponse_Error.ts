import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ClaimResponse_Error      extends DSTU2_BackboneElement
{

   static def : string = 'ClaimResponse_Error';
   sequenceLinkId : string ;
   detailSequenceLinkId : string ;
   subdetailSequenceLinkId : string ;
   code : DSTU2_Coding ;
}
