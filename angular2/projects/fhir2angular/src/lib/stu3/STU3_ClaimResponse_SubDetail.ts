import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ClaimResponse_Adjudication } from './STU3_ClaimResponse_Adjudication'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ClaimResponse_SubDetail      extends STU3_BackboneElement
{

   static def : string = 'ClaimResponse_SubDetail';
   sequenceLinkId : string ;
   noteNumber : string [];
   adjudication : STU3_ClaimResponse_Adjudication [];
}
