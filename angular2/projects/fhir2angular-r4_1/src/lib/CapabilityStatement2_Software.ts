import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class CapabilityStatement2_Software      extends BackboneElement
{

   static def : string = 'CapabilityStatement2_Software';
   name : string ;
   version : string ;
   releaseDate : string ;
}
