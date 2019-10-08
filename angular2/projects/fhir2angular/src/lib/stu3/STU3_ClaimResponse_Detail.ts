import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ClaimResponse_Adjudication } from './STU3_ClaimResponse_Adjudication'
import { STU3_ClaimResponse_SubDetail } from './STU3_ClaimResponse_SubDetail'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ClaimResponse_Detail      extends STU3_BackboneElement
{

   static def : string = 'ClaimResponse_Detail';
   sequenceLinkId : string ;
   noteNumber : string [];
   adjudication : STU3_ClaimResponse_Adjudication [];
   subDetail : STU3_ClaimResponse_SubDetail [];
}
