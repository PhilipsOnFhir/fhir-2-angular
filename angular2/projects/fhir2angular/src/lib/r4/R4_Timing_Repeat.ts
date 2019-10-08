import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EventTimingEnum } from './R4_EventTimingEnum'
import { R4_Period } from './R4_Period'
import { R4_Range } from './R4_Range'
import { R4_UnitsOfTimeEnum } from './R4_UnitsOfTimeEnum'

export class R4_Timing_Repeat      extends R4_BackboneElement
{

   static def : string = 'Timing_Repeat';
   boundsDuration : string ;
   boundsRange : R4_Range ;
   boundsPeriod : R4_Period ;
   count : string ;
   countMax : string ;
   duration : string ;
   durationMax : string ;
   durationUnit : R4_UnitsOfTimeEnum ;
   frequency : string ;
   frequencyMax : string ;
   period : string ;
   periodMax : string ;
   periodUnit : R4_UnitsOfTimeEnum ;
   dayOfWeek : string [];
   timeOfDay : string [];
   when : R4_EventTimingEnum [];
   offset : string ;
}
