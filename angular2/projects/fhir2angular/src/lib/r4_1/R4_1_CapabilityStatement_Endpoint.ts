import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_CapabilityStatement_Endpoint      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Endpoint';
   protocol : R4_1_Coding ;
   address : string ;
}
