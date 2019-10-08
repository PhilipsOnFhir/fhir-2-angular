import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'

export class STU3_MessageDefinition_Focus      extends STU3_BackboneElement
{

   static def : string = 'MessageDefinition_Focus';
   code : STU3_ResourceTypeEnum ;
   profile : STU3_Reference ;
   min : string ;
   max : string ;
}
