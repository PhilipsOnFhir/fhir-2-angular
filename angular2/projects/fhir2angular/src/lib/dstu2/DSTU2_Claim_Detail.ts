import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Claim_SubDetail } from './DSTU2_Claim_SubDetail'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Money } from './DSTU2_Money'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Claim_Detail      extends DSTU2_BackboneElement
{

   static def : string = 'Claim_Detail';
   sequence : string ;
   type : DSTU2_Coding ;
   service : DSTU2_Coding ;
   quantity : DSTU2_SimpleQuantity ;
   unitPrice : DSTU2_Money ;
   factor : string ;
   points : string ;
   net : DSTU2_Money ;
   udi : DSTU2_Coding ;
   subDetail : DSTU2_Claim_SubDetail [];
}
