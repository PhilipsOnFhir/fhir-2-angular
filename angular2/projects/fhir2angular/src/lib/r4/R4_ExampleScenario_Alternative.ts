import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExampleScenario_Step } from './R4_ExampleScenario_Step'

export class R4_ExampleScenario_Alternative      extends R4_BackboneElement
{

   static def : string = 'ExampleScenario_Alternative';
   title : string ;
   description : string ;
   step : R4_ExampleScenario_Step [];
}
