import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MessageHeader_Destination      extends STU3_BackboneElement
{

   static def : string = 'MessageHeader_Destination';
   name : string ;
   target : STU3_Reference ;
   endpoint : string ;
}
