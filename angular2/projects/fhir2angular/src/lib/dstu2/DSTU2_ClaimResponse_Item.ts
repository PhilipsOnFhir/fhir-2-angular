import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ClaimResponse_Adjudication } from './DSTU2_ClaimResponse_Adjudication'
import { DSTU2_ClaimResponse_Detail } from './DSTU2_ClaimResponse_Detail'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ClaimResponse_Item      extends DSTU2_BackboneElement
{

   static def : string = 'ClaimResponse_Item';
   sequenceLinkId : string ;
   noteNumber : string [];
   adjudication : DSTU2_ClaimResponse_Adjudication [];
   detail : DSTU2_ClaimResponse_Detail [];
}
