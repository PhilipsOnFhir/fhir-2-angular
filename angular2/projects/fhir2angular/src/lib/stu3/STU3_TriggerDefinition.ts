import { STU3_DataRequirement } from './STU3_DataRequirement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Timing } from './STU3_Timing'
import { STU3_TriggerTypeEnum } from './STU3_TriggerTypeEnum'

export class STU3_TriggerDefinition      extends STU3_Element
{

   static def : string = 'TriggerDefinition';
   type : STU3_TriggerTypeEnum ;
   eventName : string ;
   eventTimingTiming : STU3_Timing ;
   eventTimingReference : STU3_Reference ;
   eventTimingDate : string ;
   eventTimingDateTime : string ;
   eventData : STU3_DataRequirement ;
}
