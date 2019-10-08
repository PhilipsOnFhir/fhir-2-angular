import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExampleScenarioActorTypeEnum } from './R4_ExampleScenarioActorTypeEnum'

export class R4_ExampleScenario_Actor      extends R4_BackboneElement
{

   static def : string = 'ExampleScenario_Actor';
   actorId : string ;
   type : R4_ExampleScenarioActorTypeEnum ;
   name : string ;
   description : string ;
}
