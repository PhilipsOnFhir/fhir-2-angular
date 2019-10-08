import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ClaimResponse_Adjudication } from './R4_ClaimResponse_Adjudication'
import { R4_ClaimResponse_Detail } from './R4_ClaimResponse_Detail'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ClaimResponse_Item      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_Item';
   itemSequence : string ;
   noteNumber : string [];
   adjudication : R4_ClaimResponse_Adjudication [];
   detail : R4_ClaimResponse_Detail [];
}
