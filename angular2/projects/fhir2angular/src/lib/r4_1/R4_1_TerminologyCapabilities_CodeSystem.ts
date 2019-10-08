import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TerminologyCapabilities_Version } from './R4_1_TerminologyCapabilities_Version'

export class R4_1_TerminologyCapabilities_CodeSystem      extends R4_1_BackboneElement
{

   static def : string = 'TerminologyCapabilities_CodeSystem';
   uri : string ;
   version : R4_1_TerminologyCapabilities_Version [];
   subsumption : boolean ;
}
