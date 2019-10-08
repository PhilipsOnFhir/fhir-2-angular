import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GraphDefinition_Compartment } from './STU3_GraphDefinition_Compartment'
import { STU3_GraphDefinition_Link } from './STU3_GraphDefinition_Link'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'

export class STU3_GraphDefinition_Target      extends STU3_BackboneElement
{

   static def : string = 'GraphDefinition_Target';
   type : STU3_ResourceTypeEnum ;
   profile : string ;
   compartment : STU3_GraphDefinition_Compartment [];
   link : STU3_GraphDefinition_Link [];
}
