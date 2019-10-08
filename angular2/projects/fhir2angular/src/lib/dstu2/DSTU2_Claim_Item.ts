import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Claim_Detail } from './DSTU2_Claim_Detail'
import { DSTU2_Claim_Prosthesis } from './DSTU2_Claim_Prosthesis'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Money } from './DSTU2_Money'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Claim_Item      extends DSTU2_BackboneElement
{

   static def : string = 'Claim_Item';
   sequence : string ;
   type : DSTU2_Coding ;
   provider : DSTU2_Reference ;
   diagnosisLinkId : string [];
   service : DSTU2_Coding ;
   serviceDate : string ;
   quantity : DSTU2_SimpleQuantity ;
   unitPrice : DSTU2_Money ;
   factor : string ;
   points : string ;
   net : DSTU2_Money ;
   udi : DSTU2_Coding ;
   bodySite : DSTU2_Coding ;
   subSite : DSTU2_Coding [];
   modifier : DSTU2_Coding [];
   detail : DSTU2_Claim_Detail [];
   prosthesis : DSTU2_Claim_Prosthesis ;
}
