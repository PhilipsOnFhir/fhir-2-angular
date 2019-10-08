import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EventTimingEnum } from './R4_1_EventTimingEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_UnitsOfTimeEnum } from './R4_1_UnitsOfTimeEnum'

export class R4_1_Timing_Repeat      extends R4_1_BackboneElement
{

   static def : string = 'Timing_Repeat';
   boundsDuration : string ;
   boundsRange : R4_1_Range ;
   boundsPeriod : R4_1_Period ;
   count : string ;
   countMax : string ;
   duration : string ;
   durationMax : string ;
   durationUnit : R4_1_UnitsOfTimeEnum ;
   frequency : string ;
   frequencyMax : string ;
   period : string ;
   periodMax : string ;
   periodUnit : R4_1_UnitsOfTimeEnum ;
   dayOfWeek : string [];
   timeOfDay : string [];
   when : R4_1_EventTimingEnum [];
   offset : string ;
}
