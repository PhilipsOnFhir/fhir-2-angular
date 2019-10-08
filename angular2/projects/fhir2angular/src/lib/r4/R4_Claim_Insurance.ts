import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Claim_Insurance      extends R4_BackboneElement
{

   static def : string = 'Claim_Insurance';
   sequence : string ;
   focal : boolean ;
   identifier : R4_Identifier ;
   coverage : R4_Reference ;
   businessArrangement : string ;
   preAuthRef : string [];
   claimResponse : R4_Reference ;
}
