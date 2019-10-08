import { R4_DataRequirement } from './R4_DataRequirement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Expression } from './R4_Expression'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'
import { R4_TriggerTypeEnum } from './R4_TriggerTypeEnum'

export class R4_TriggerDefinition      extends R4_Element
{

   static def : string = 'TriggerDefinition';
   type : R4_TriggerTypeEnum ;
   name : string ;
   timingTiming : R4_Timing ;
   timingReference : R4_Reference ;
   timingDate : string ;
   timingDateTime : string ;
   data : R4_DataRequirement [];
   condition : R4_Expression ;
}
