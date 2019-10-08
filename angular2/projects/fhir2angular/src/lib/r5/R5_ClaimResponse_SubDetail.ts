import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ClaimResponse_Adjudication } from './R5_ClaimResponse_Adjudication'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ClaimResponse_SubDetail      extends R5_BackboneElement
{

   static def : string = 'ClaimResponse_SubDetail';
   subDetailSequence : string ;
   noteNumber : string [];
   adjudication : R5_ClaimResponse_Adjudication [];
}
