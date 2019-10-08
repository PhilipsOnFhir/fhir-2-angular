import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ClaimResponse_Insurance      extends STU3_BackboneElement
{

   static def : string = 'ClaimResponse_Insurance';
   sequence : string ;
   focal : boolean ;
   coverage : STU3_Reference ;
   businessArrangement : string ;
   preAuthRef : string [];
   claimResponse : STU3_Reference ;
}
