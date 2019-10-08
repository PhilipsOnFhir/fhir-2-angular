import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TerminologyCapabilities_Filter } from './R4_TerminologyCapabilities_Filter'

export class R4_TerminologyCapabilities_Version      extends R4_BackboneElement
{

   static def : string = 'TerminologyCapabilities_Version';
   code : string ;
   isDefault : boolean ;
   compositional : boolean ;
   language : string [];
   filter : R4_TerminologyCapabilities_Filter [];
   property : string [];
}
