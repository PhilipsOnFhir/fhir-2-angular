import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ClaimResponse_Adjudication } from './R4_1_ClaimResponse_Adjudication'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ClaimResponse_SubDetail      extends R4_1_BackboneElement
{

   static def : string = 'ClaimResponse_SubDetail';
   subDetailSequence : string ;
   noteNumber : string [];
   adjudication : R4_1_ClaimResponse_Adjudication [];
}
