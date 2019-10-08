import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Duration } from './DSTU2_Duration'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_EventTimingEnum } from './DSTU2_EventTimingEnum'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_UnitsOfTimeEnum } from './DSTU2_UnitsOfTimeEnum'

export class DSTU2_Timing_Repeat      extends DSTU2_Element
{

   static def : string = 'Timing_Repeat';
   boundsQuantity : DSTU2_Duration ;
   boundsRange : DSTU2_Range ;
   boundsPeriod : DSTU2_Period ;
   count : string ;
   duration : string ;
   durationMax : string ;
   durationUnits : DSTU2_UnitsOfTimeEnum ;
   frequency : string ;
   frequencyMax : string ;
   period : string ;
   periodMax : string ;
   periodUnits : DSTU2_UnitsOfTimeEnum ;
   when : DSTU2_EventTimingEnum ;
}
