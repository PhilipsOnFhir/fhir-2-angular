import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DaysOfWeekEnum } from './DSTU2_DaysOfWeekEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_HealthcareService_AvailableTime      extends DSTU2_BackboneElement
{

   static def : string = 'HealthcareService_AvailableTime';
   daysOfWeek : DSTU2_DaysOfWeekEnum [];
   allDay : boolean ;
   availableStartTime : string ;
   availableEndTime : string ;
}
