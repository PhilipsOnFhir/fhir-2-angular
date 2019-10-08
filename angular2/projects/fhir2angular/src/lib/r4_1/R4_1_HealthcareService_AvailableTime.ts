import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DaysOfWeekEnum } from './R4_1_DaysOfWeekEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_HealthcareService_AvailableTime      extends R4_1_BackboneElement
{

   static def : string = 'HealthcareService_AvailableTime';
   daysOfWeek : R4_1_DaysOfWeekEnum [];
   allDay : boolean ;
   availableStartTime : string ;
   availableEndTime : string ;
}
