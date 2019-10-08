import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Claim_Insurance      extends R4_1_BackboneElement
{

   static def : string = 'Claim_Insurance';
   sequence : string ;
   focal : boolean ;
   identifier : R4_1_Identifier ;
   coverage : R4_1_Reference ;
   businessArrangement : string ;
   preAuthRef : string [];
   claimResponse : R4_1_Reference ;
}
