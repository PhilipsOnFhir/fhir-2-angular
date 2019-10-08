import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DaysOfWeekEnum } from './R4_DaysOfWeekEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_HealthcareService_AvailableTime      extends R4_BackboneElement
{

   static def : string = 'HealthcareService_AvailableTime';
   daysOfWeek : R4_DaysOfWeekEnum [];
   allDay : boolean ;
   availableStartTime : string ;
   availableEndTime : string ;
}
