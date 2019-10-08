import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_CapabilityStatement_Implementation      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Implementation';
   description : string ;
   url : string ;
   custodian : R5_Reference ;
}
