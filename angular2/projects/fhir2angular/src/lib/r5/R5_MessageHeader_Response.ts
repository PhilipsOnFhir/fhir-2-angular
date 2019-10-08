import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'
import { R5_ResponseTypeEnum } from './R5_ResponseTypeEnum'

export class R5_MessageHeader_Response      extends R5_BackboneElement
{

   static def : string = 'MessageHeader_Response';
   identifier : string ;
   code : R5_ResponseTypeEnum ;
   details : R5_Reference ;
}
