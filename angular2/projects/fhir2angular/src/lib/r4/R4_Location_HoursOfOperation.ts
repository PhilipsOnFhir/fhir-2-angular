import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DaysOfWeekEnum } from './R4_DaysOfWeekEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Location_HoursOfOperation      extends R4_BackboneElement
{

   static def : string = 'Location_HoursOfOperation';
   daysOfWeek : R4_DaysOfWeekEnum [];
   allDay : boolean ;
   openingTime : string ;
   closingTime : string ;
}
