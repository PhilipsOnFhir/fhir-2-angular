import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_MessageHeader_Destination      extends DSTU2_BackboneElement
{

   static def : string = 'MessageHeader_Destination';
   name : string ;
   target : DSTU2_Reference ;
   endpoint : string ;
}
