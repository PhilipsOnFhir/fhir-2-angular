import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Claim_Payee      extends DSTU2_BackboneElement
{

   static def : string = 'Claim_Payee';
   type : DSTU2_Coding ;
   provider : DSTU2_Reference ;
   organization : DSTU2_Reference ;
   person : DSTU2_Reference ;
}
