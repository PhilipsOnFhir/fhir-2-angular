import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_EventTimingEnum } from './STU3_EventTimingEnum'
import { STU3_Period } from './STU3_Period'
import { STU3_Range } from './STU3_Range'
import { STU3_UnitsOfTimeEnum } from './STU3_UnitsOfTimeEnum'

export class STU3_Timing_Repeat      extends STU3_Element
{

   static def : string = 'Timing_Repeat';
   boundsDuration : string ;
   boundsRange : STU3_Range ;
   boundsPeriod : STU3_Period ;
   count : string ;
   countMax : string ;
   duration : string ;
   durationMax : string ;
   durationUnit : STU3_UnitsOfTimeEnum ;
   frequency : string ;
   frequencyMax : string ;
   period : string ;
   periodMax : string ;
   periodUnit : STU3_UnitsOfTimeEnum ;
   dayOfWeek : string [];
   timeOfDay : string [];
   when : STU3_EventTimingEnum [];
   offset : string ;
}
