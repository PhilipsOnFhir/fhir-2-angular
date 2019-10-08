import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_CapabilityStatement_Software      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Software';
   name : string ;
   version : string ;
   releaseDate : string ;
}
