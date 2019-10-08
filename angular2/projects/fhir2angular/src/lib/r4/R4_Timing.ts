import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Timing_Repeat } from './R4_Timing_Repeat'

export class R4_Timing      extends R4_BackboneElement
{

   static def : string = 'Timing';
   event : string [];
   repeat : R4_Timing_Repeat ;
   code : R4_CodeableConcept ;
}
