import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExampleScenario_Alternative } from './R5_ExampleScenario_Alternative'
import { R5_ExampleScenario_Operation } from './R5_ExampleScenario_Operation'
import { R5_ExampleScenario_Process } from './R5_ExampleScenario_Process'

export class R5_ExampleScenario_Step      extends R5_BackboneElement
{

   static def : string = 'ExampleScenario_Step';
   process : R5_ExampleScenario_Process [];
   pause : boolean ;
   operation : R5_ExampleScenario_Operation ;
   alternative : R5_ExampleScenario_Alternative [];
}
