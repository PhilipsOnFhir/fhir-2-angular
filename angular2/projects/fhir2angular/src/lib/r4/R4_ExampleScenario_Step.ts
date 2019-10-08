import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExampleScenario_Alternative } from './R4_ExampleScenario_Alternative'
import { R4_ExampleScenario_Operation } from './R4_ExampleScenario_Operation'
import { R4_ExampleScenario_Process } from './R4_ExampleScenario_Process'

export class R4_ExampleScenario_Step      extends R4_BackboneElement
{

   static def : string = 'ExampleScenario_Step';
   process : R4_ExampleScenario_Process [];
   pause : boolean ;
   operation : R4_ExampleScenario_Operation ;
   alternative : R4_ExampleScenario_Alternative [];
}
