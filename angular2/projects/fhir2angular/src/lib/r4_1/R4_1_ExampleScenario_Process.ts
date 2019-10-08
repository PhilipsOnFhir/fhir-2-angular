import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExampleScenario_Step } from './R4_1_ExampleScenario_Step'

export class R4_1_ExampleScenario_Process      extends R4_1_BackboneElement
{

   static def : string = 'ExampleScenario_Process';
   title : string ;
   description : string ;
   preConditions : string ;
   postConditions : string ;
   step : R4_1_ExampleScenario_Step [];
}
