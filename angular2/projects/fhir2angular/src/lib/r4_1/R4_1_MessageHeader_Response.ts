import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_ResponseTypeEnum } from './R4_1_ResponseTypeEnum'

export class R4_1_MessageHeader_Response      extends R4_1_BackboneElement
{

   static def : string = 'MessageHeader_Response';
   identifier : string ;
   code : R4_1_ResponseTypeEnum ;
   details : R4_1_Reference ;
}
