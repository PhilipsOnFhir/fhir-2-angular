import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Conformance_Software      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Software';
   name : string ;
   version : string ;
   releaseDate : string ;
}
