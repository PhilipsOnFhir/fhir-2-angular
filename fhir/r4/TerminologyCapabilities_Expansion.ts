import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TerminologyCapabilities_Parameter } from './TerminologyCapabilities_Parameter'

export class TerminologyCapabilities_Expansion      extends BackboneElement
{

   static def : string = 'TerminologyCapabilities_Expansion';
   hierarchical : string ;
   paging : string ;
   incomplete : string ;
   parameter : TerminologyCapabilities_Parameter [];
   textFilter : string ;
}
