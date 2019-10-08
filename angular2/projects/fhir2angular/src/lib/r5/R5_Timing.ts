import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Timing_Repeat } from './R5_Timing_Repeat'

export class R5_Timing      extends R5_BackboneElement
{

   static def : string = 'Timing';
   event : string [];
   repeat : R5_Timing_Repeat ;
   code : R5_CodeableConcept ;
}
