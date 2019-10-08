import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TerminologyCapabilities_Parameter } from './R4_TerminologyCapabilities_Parameter'

export class R4_TerminologyCapabilities_Expansion      extends R4_BackboneElement
{

   static def : string = 'TerminologyCapabilities_Expansion';
   hierarchical : boolean ;
   paging : boolean ;
   incomplete : boolean ;
   parameter : R4_TerminologyCapabilities_Parameter [];
   textFilter : string ;
}
