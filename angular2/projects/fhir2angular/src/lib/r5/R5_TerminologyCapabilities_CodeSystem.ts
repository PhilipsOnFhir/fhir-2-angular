import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TerminologyCapabilities_Version } from './R5_TerminologyCapabilities_Version'

export class R5_TerminologyCapabilities_CodeSystem      extends R5_BackboneElement
{

   static def : string = 'TerminologyCapabilities_CodeSystem';
   uri : string ;
   version : R5_TerminologyCapabilities_Version [];
   subsumption : boolean ;
}
