import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DaysOfWeekEnum } from './R4_1_DaysOfWeekEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Location_HoursOfOperation      extends R4_1_BackboneElement
{

   static def : string = 'Location_HoursOfOperation';
   daysOfWeek : R4_1_DaysOfWeekEnum [];
   allDay : boolean ;
   openingTime : string ;
   closingTime : string ;
}
