import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExampleScenario_ContainedInstance } from './R4_1_ExampleScenario_ContainedInstance'

export class R4_1_ExampleScenario_Operation      extends R4_1_BackboneElement
{

   static def : string = 'ExampleScenario_Operation';
   number : string ;
   type : string ;
   name : string ;
   initiator : string ;
   receiver : string ;
   description : string ;
   initiatorActive : boolean ;
   receiverActive : boolean ;
   request : R4_1_ExampleScenario_ContainedInstance ;
   response : R4_1_ExampleScenario_ContainedInstance ;
}
