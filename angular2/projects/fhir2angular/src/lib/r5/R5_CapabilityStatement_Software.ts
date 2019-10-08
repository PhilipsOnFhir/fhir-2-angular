import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_CapabilityStatement_Software      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Software';
   name : string ;
   version : string ;
   releaseDate : string ;
}
