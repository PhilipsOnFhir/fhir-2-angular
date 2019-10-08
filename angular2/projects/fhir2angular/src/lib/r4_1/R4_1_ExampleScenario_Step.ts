import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExampleScenario_Alternative } from './R4_1_ExampleScenario_Alternative'
import { R4_1_ExampleScenario_Operation } from './R4_1_ExampleScenario_Operation'
import { R4_1_ExampleScenario_Process } from './R4_1_ExampleScenario_Process'

export class R4_1_ExampleScenario_Step      extends R4_1_BackboneElement
{

   static def : string = 'ExampleScenario_Step';
   process : R4_1_ExampleScenario_Process [];
   pause : boolean ;
   operation : R4_1_ExampleScenario_Operation ;
   alternative : R4_1_ExampleScenario_Alternative [];
}
