import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_CapabilityStatement_Software      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_Software';
   name : string ;
   version : string ;
   releaseDate : string ;
}
