import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExampleScenario_Step } from './R5_ExampleScenario_Step'

export class R5_ExampleScenario_Alternative      extends R5_BackboneElement
{

   static def : string = 'ExampleScenario_Alternative';
   title : string ;
   description : string ;
   step : R5_ExampleScenario_Step [];
}
