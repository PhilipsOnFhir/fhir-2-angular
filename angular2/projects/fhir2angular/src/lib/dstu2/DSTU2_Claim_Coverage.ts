import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Claim_Coverage      extends DSTU2_BackboneElement
{

   static def : string = 'Claim_Coverage';
   sequence : string ;
   focal : boolean ;
   coverage : DSTU2_Reference ;
   businessArrangement : string ;
   relationship : DSTU2_Coding ;
   preAuthRef : string [];
   claimResponse : DSTU2_Reference ;
   originalRuleset : DSTU2_Coding ;
}
