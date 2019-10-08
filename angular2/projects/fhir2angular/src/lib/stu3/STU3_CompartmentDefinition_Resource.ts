import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'

export class STU3_CompartmentDefinition_Resource      extends STU3_BackboneElement
{

   static def : string = 'CompartmentDefinition_Resource';
   code : STU3_ResourceTypeEnum ;
   param : string [];
   documentation : string ;
}
