import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DeviceRequest_Requester      extends STU3_BackboneElement
{

   static def : string = 'DeviceRequest_Requester';
   agent : STU3_Reference ;
   onBehalfOf : STU3_Reference ;
}
