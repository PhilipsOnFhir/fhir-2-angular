import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_ClaimResponse_Insurance      extends R5_BackboneElement
{

   static def : string = 'ClaimResponse_Insurance';
   sequence : string ;
   focal : boolean ;
   coverage : R5_Reference ;
   businessArrangement : string ;
   claimResponse : R5_Reference ;
}
