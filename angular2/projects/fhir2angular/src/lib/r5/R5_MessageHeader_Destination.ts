import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_MessageHeader_Destination      extends R5_BackboneElement
{

   static def : string = 'MessageHeader_Destination';
   name : string ;
   target : R5_Reference ;
   endpoint : string ;
   receiver : R5_Reference ;
}
