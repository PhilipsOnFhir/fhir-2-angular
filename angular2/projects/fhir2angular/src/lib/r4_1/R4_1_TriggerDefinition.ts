import { R4_1_DataRequirement } from './R4_1_DataRequirement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Expression } from './R4_1_Expression'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_TriggerTypeEnum } from './R4_1_TriggerTypeEnum'

export class R4_1_TriggerDefinition      extends R4_1_Element
{

   static def : string = 'TriggerDefinition';
   type : R4_1_TriggerTypeEnum ;
   name : string ;
   timingTiming : R4_1_Timing ;
   timingReference : R4_1_Reference ;
   timingDate : string ;
   timingDateTime : string ;
   data : R4_1_DataRequirement [];
   condition : R4_1_Expression ;
}
