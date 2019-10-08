import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExampleScenarioActorTypeEnum } from './R4_1_ExampleScenarioActorTypeEnum'

export class R4_1_ExampleScenario_Actor      extends R4_1_BackboneElement
{

   static def : string = 'ExampleScenario_Actor';
   actorId : string ;
   type : R4_1_ExampleScenarioActorTypeEnum ;
   name : string ;
   description : string ;
}
