import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DaysOfWeekEnum } from './R5_DaysOfWeekEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_PractitionerRole_AvailableTime      extends R5_BackboneElement
{

   static def : string = 'PractitionerRole_AvailableTime';
   daysOfWeek : R5_DaysOfWeekEnum [];
   allDay : boolean ;
   availableStartTime : string ;
   availableEndTime : string ;
}
