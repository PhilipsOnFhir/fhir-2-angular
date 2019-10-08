import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_MessageHeader_Destination      extends R4_BackboneElement
{

   static def : string = 'MessageHeader_Destination';
   name : string ;
   target : R4_Reference ;
   endpoint : string ;
   receiver : R4_Reference ;
}
