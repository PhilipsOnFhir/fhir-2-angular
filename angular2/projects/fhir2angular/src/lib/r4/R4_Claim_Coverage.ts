import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Claim_Coverage      extends R4_BackboneElement
{

   static def : string = 'Claim_Coverage';
   sequence : string ;
   focal : boolean ;
   coverage : R4_Reference ;
   businessArrangement : string ;
   relationship : R4_Coding ;
   preAuthRef : string [];
   claimResponse : R4_Reference ;
   originalRuleset : R4_Coding ;
}
