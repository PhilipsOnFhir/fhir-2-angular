import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MessageDefinition_AllowedResponse      extends STU3_BackboneElement
{

   static def : string = 'MessageDefinition_AllowedResponse';
   message : STU3_Reference ;
   situation : string ;
}
