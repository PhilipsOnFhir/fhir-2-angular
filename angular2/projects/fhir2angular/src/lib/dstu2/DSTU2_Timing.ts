import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_Timing_Repeat } from './DSTU2_Timing_Repeat'

export class DSTU2_Timing      extends DSTU2_Element
{

   static def : string = 'Timing';
   event : string [];
   repeat : DSTU2_Timing_Repeat ;
   code : DSTU2_CodeableConcept ;
}
