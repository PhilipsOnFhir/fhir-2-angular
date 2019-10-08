import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ClaimResponse_Adjudication } from './R5_ClaimResponse_Adjudication'
import { R5_ClaimResponse_SubDetail } from './R5_ClaimResponse_SubDetail'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ClaimResponse_Detail      extends R5_BackboneElement
{

   static def : string = 'ClaimResponse_Detail';
   detailSequence : string ;
   noteNumber : string [];
   adjudication : R5_ClaimResponse_Adjudication [];
   subDetail : R5_ClaimResponse_SubDetail [];
}
