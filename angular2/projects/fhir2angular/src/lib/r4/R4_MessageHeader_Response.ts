import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_ResponseTypeEnum } from './R4_ResponseTypeEnum'

export class R4_MessageHeader_Response      extends R4_BackboneElement
{

   static def : string = 'MessageHeader_Response';
   identifier : string ;
   code : R4_ResponseTypeEnum ;
   details : R4_Reference ;
}
