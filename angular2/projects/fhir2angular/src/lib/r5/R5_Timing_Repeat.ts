import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EventTimingEnum } from './R5_EventTimingEnum'
import { R5_Period } from './R5_Period'
import { R5_Range } from './R5_Range'
import { R5_UnitsOfTimeEnum } from './R5_UnitsOfTimeEnum'

export class R5_Timing_Repeat      extends R5_BackboneElement
{

   static def : string = 'Timing_Repeat';
   boundsDuration : string ;
   boundsRange : R5_Range ;
   boundsPeriod : R5_Period ;
   count : string ;
   countMax : string ;
   duration : string ;
   durationMax : string ;
   durationUnit : R5_UnitsOfTimeEnum ;
   frequency : string ;
   frequencyMax : string ;
   period : string ;
   periodMax : string ;
   periodUnit : R5_UnitsOfTimeEnum ;
   dayOfWeek : string [];
   timeOfDay : string [];
   when : R5_EventTimingEnum [];
   offset : string ;
}
