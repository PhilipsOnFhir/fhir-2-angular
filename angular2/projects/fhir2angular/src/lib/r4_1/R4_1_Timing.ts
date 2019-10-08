import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Timing_Repeat } from './R4_1_Timing_Repeat'

export class R4_1_Timing      extends R4_1_BackboneElement
{

   static def : string = 'Timing';
   event : string [];
   repeat : R4_1_Timing_Repeat ;
   code : R4_1_CodeableConcept ;
}
