import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ClaimResponse_Adjudication } from './R4_1_ClaimResponse_Adjudication'
import { R4_1_ClaimResponse_Detail } from './R4_1_ClaimResponse_Detail'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ClaimResponse_Item      extends R4_1_BackboneElement
{

   static def : string = 'ClaimResponse_Item';
   itemSequence : string ;
   noteNumber : string [];
   adjudication : R4_1_ClaimResponse_Adjudication [];
   detail : R4_1_ClaimResponse_Detail [];
}
