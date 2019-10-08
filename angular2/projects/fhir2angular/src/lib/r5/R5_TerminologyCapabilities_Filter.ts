import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_TerminologyCapabilities_Filter      extends R5_BackboneElement
{

   static def : string = 'TerminologyCapabilities_Filter';
   code : string ;
   op : string [];
}
