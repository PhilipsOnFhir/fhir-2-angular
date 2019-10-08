import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DaysOfWeekEnum } from './R5_DaysOfWeekEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Location_HoursOfOperation      extends R5_BackboneElement
{

   static def : string = 'Location_HoursOfOperation';
   daysOfWeek : R5_DaysOfWeekEnum [];
   allDay : boolean ;
   openingTime : string ;
   closingTime : string ;
}
