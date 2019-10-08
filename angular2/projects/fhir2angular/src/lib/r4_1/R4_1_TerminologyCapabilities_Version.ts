import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TerminologyCapabilities_Filter } from './R4_1_TerminologyCapabilities_Filter'

export class R4_1_TerminologyCapabilities_Version      extends R4_1_BackboneElement
{

   static def : string = 'TerminologyCapabilities_Version';
   code : string ;
   isDefault : boolean ;
   compositional : boolean ;
   language : string [];
   filter : R4_1_TerminologyCapabilities_Filter [];
   property : string [];
}
