import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Claim_Insurance      extends R5_BackboneElement
{

   static def : string = 'Claim_Insurance';
   sequence : string ;
   focal : boolean ;
   identifier : R5_Identifier ;
   coverage : R5_Reference ;
   businessArrangement : string ;
   preAuthRef : string [];
   claimResponse : R5_Reference ;
}
