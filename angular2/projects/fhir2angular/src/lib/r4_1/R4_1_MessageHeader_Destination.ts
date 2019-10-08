import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MessageHeader_Destination      extends R4_1_BackboneElement
{

   static def : string = 'MessageHeader_Destination';
   name : string ;
   target : R4_1_Reference ;
   endpoint : string ;
   receiver : R4_1_Reference ;
}
