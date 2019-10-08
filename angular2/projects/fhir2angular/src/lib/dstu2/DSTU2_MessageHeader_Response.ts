import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_ResponseTypeEnum } from './DSTU2_ResponseTypeEnum'

export class DSTU2_MessageHeader_Response      extends DSTU2_BackboneElement
{

   static def : string = 'MessageHeader_Response';
   identifier : string ;
   code : DSTU2_ResponseTypeEnum ;
   details : DSTU2_Reference ;
}
