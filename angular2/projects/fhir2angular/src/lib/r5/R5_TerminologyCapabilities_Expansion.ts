import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TerminologyCapabilities_Parameter } from './R5_TerminologyCapabilities_Parameter'

export class R5_TerminologyCapabilities_Expansion      extends R5_BackboneElement
{

   static def : string = 'TerminologyCapabilities_Expansion';
   hierarchical : boolean ;
   paging : boolean ;
   incomplete : boolean ;
   parameter : R5_TerminologyCapabilities_Parameter [];
   textFilter : string ;
}
