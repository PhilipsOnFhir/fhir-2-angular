import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TerminologyCapabilities_Version } from './R4_TerminologyCapabilities_Version'

export class R4_TerminologyCapabilities_CodeSystem      extends R4_BackboneElement
{

   static def : string = 'TerminologyCapabilities_CodeSystem';
   uri : string ;
   version : R4_TerminologyCapabilities_Version [];
   subsumption : boolean ;
}
