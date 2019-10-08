import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_CapabilityStatement_Implementation      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_Implementation';
   description : string ;
   url : string ;
   custodian : R4_Reference ;
}
