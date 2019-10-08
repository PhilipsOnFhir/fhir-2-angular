import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_ResponseTypeEnum } from './STU3_ResponseTypeEnum'

export class STU3_MessageHeader_Response      extends STU3_BackboneElement
{

   static def : string = 'MessageHeader_Response';
   identifier : string ;
   code : STU3_ResponseTypeEnum ;
   details : STU3_Reference ;
}
