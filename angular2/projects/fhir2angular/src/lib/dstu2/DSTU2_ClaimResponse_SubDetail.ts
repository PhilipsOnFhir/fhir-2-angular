import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ClaimResponse_Adjudication2 } from './DSTU2_ClaimResponse_Adjudication2'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ClaimResponse_SubDetail      extends DSTU2_BackboneElement
{

   static def : string = 'ClaimResponse_SubDetail';
   sequenceLinkId : string ;
   adjudication : DSTU2_ClaimResponse_Adjudication2 [];
}
