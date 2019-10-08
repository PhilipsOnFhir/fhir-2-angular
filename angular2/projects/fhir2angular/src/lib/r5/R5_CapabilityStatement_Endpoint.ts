import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_CapabilityStatement_Endpoint      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Endpoint';
   protocol : R5_Coding ;
   address : string ;
}
