import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ClaimResponse_Adjudication } from './R4_ClaimResponse_Adjudication'
import { R4_ClaimResponse_SubDetail } from './R4_ClaimResponse_SubDetail'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ClaimResponse_Detail      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_Detail';
   detailSequence : string ;
   noteNumber : string [];
   adjudication : R4_ClaimResponse_Adjudication [];
   subDetail : R4_ClaimResponse_SubDetail [];
}
