import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_CapabilityStatement_Software      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_Software';
   name : string ;
   version : string ;
   releaseDate : string ;
}
