import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CapabilityStatement_Implementation      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Implementation';
   description : string ;
   url : string ;
   custodian : R4_1_Reference ;
}
