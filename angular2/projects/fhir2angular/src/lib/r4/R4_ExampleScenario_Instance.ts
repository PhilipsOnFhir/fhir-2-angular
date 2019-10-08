import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExampleScenario_ContainedInstance } from './R4_ExampleScenario_ContainedInstance'
import { R4_ExampleScenario_Version } from './R4_ExampleScenario_Version'
import { R4_ResourceTypeEnum } from './R4_ResourceTypeEnum'

export class R4_ExampleScenario_Instance      extends R4_BackboneElement
{

   static def : string = 'ExampleScenario_Instance';
   resourceId : string ;
   resourceType : R4_ResourceTypeEnum ;
   name : string ;
   description : string ;
   version : R4_ExampleScenario_Version [];
   containedInstance : R4_ExampleScenario_ContainedInstance [];
}
