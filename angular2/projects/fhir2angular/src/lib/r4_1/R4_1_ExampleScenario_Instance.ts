import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExampleScenario_ContainedInstance } from './R4_1_ExampleScenario_ContainedInstance'
import { R4_1_ExampleScenario_Version } from './R4_1_ExampleScenario_Version'
import { R4_1_ResourceTypeEnum } from './R4_1_ResourceTypeEnum'

export class R4_1_ExampleScenario_Instance      extends R4_1_BackboneElement
{

   static def : string = 'ExampleScenario_Instance';
   resourceId : string ;
   resourceType : R4_1_ResourceTypeEnum ;
   name : string ;
   description : string ;
   version : R4_1_ExampleScenario_Version [];
   containedInstance : R4_1_ExampleScenario_ContainedInstance [];
}
