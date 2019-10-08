import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Timing_Repeat } from './STU3_Timing_Repeat'

export class STU3_Timing      extends STU3_Element
{

   static def : string = 'Timing';
   event : string [];
   repeat : STU3_Timing_Repeat ;
   code : STU3_CodeableConcept ;
}
