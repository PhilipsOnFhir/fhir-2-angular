import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TerminologyCapabilities_Parameter } from './R4_1_TerminologyCapabilities_Parameter'

export class R4_1_TerminologyCapabilities_Expansion      extends R4_1_BackboneElement
{

   static def : string = 'TerminologyCapabilities_Expansion';
   hierarchical : boolean ;
   paging : boolean ;
   incomplete : boolean ;
   parameter : R4_1_TerminologyCapabilities_Parameter [];
   textFilter : string ;
}
