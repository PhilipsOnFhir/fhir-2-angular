import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_CapabilityStatement_Endpoint      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_Endpoint';
   protocol : R4_Coding ;
   address : string ;
}
