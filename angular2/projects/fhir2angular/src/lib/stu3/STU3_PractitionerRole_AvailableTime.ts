import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DaysOfWeekEnum } from './STU3_DaysOfWeekEnum'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_PractitionerRole_AvailableTime      extends STU3_BackboneElement
{

   static def : string = 'PractitionerRole_AvailableTime';
   daysOfWeek : STU3_DaysOfWeekEnum [];
   allDay : boolean ;
   availableStartTime : string ;
   availableEndTime : string ;
}
