import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExampleScenarioActorTypeEnum } from './R5_ExampleScenarioActorTypeEnum'

export class R5_ExampleScenario_Actor      extends R5_BackboneElement
{

   static def : string = 'ExampleScenario_Actor';
   actorId : string ;
   type : R5_ExampleScenarioActorTypeEnum ;
   name : string ;
   description : string ;
}
