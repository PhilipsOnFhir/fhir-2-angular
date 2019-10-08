import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExampleScenario_ContainedInstance } from './R5_ExampleScenario_ContainedInstance'

export class R5_ExampleScenario_Operation      extends R5_BackboneElement
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
   request : R5_ExampleScenario_ContainedInstance ;
   response : R5_ExampleScenario_ContainedInstance ;
}
