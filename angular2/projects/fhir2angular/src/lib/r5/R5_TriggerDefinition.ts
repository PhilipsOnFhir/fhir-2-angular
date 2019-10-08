import { R5_DataRequirement } from './R5_DataRequirement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Expression } from './R5_Expression'
import { R5_Reference } from './R5_Reference'
import { R5_Timing } from './R5_Timing'
import { R5_TriggerTypeEnum } from './R5_TriggerTypeEnum'

export class R5_TriggerDefinition      extends R5_Element
{

   static def : string = 'TriggerDefinition';
   type : R5_TriggerTypeEnum ;
   name : string ;
   timingTiming : R5_Timing ;
   timingReference : R5_Reference ;
   timingDate : string ;
   timingDateTime : string ;
   data : R5_DataRequirement [];
   condition : R5_Expression ;
}
