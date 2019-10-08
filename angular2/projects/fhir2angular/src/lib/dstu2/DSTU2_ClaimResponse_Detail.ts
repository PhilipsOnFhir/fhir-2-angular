import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ClaimResponse_Adjudication1 } from './DSTU2_ClaimResponse_Adjudication1'
import { DSTU2_ClaimResponse_SubDetail } from './DSTU2_ClaimResponse_SubDetail'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ClaimResponse_Detail      extends DSTU2_BackboneElement
{

   static def : string = 'ClaimResponse_Detail';
   sequenceLinkId : string ;
   adjudication : DSTU2_ClaimResponse_Adjudication1 [];
   subDetail : DSTU2_ClaimResponse_SubDetail [];
}
