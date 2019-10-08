import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExampleScenario_ContainedInstance } from './R5_ExampleScenario_ContainedInstance'
import { R5_ExampleScenario_Version } from './R5_ExampleScenario_Version'
import { R5_ResourceTypeEnum } from './R5_ResourceTypeEnum'

export class R5_ExampleScenario_Instance      extends R5_BackboneElement
{

   static def : string = 'ExampleScenario_Instance';
   resourceId : string ;
   resourceType : R5_ResourceTypeEnum ;
   name : string ;
   description : string ;
   version : R5_ExampleScenario_Version [];
   containedInstance : R5_ExampleScenario_ContainedInstance [];
}
