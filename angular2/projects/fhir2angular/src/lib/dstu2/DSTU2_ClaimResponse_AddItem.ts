import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ClaimResponse_Adjudication3 } from './DSTU2_ClaimResponse_Adjudication3'
import { DSTU2_ClaimResponse_Detail1 } from './DSTU2_ClaimResponse_Detail1'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Money } from './DSTU2_Money'

export class DSTU2_ClaimResponse_AddItem      extends DSTU2_BackboneElement
{

   static def : string = 'ClaimResponse_AddItem';
   sequenceLinkId : string [];
   service : DSTU2_Coding ;
   fee : DSTU2_Money ;
   noteNumberLinkId : string [];
   adjudication : DSTU2_ClaimResponse_Adjudication3 [];
   detail : DSTU2_ClaimResponse_Detail1 [];
}
