import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TerminologyCapabilities_Filter } from './R5_TerminologyCapabilities_Filter'

export class R5_TerminologyCapabilities_Version      extends R5_BackboneElement
{

   static def : string = 'TerminologyCapabilities_Version';
   code : string ;
   isDefault : boolean ;
   compositional : boolean ;
   language : string [];
   filter : R5_TerminologyCapabilities_Filter [];
   property : string [];
}
