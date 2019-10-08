import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Contract_Signer      extends DSTU2_BackboneElement
{

   static def : string = 'Contract_Signer';
   type : DSTU2_Coding ;
   party : DSTU2_Reference ;
   signature : string ;
}
