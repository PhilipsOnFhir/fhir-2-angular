import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SystemRestfulInteractionEnum } from './R5_SystemRestfulInteractionEnum'

export class R5_CapabilityStatement_Interaction1      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction1';
   code : R5_SystemRestfulInteractionEnum ;
   documentation : string ;
}
