import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SystemRestfulInteractionEnum } from './R4_1_SystemRestfulInteractionEnum'

export class R4_1_CapabilityStatement_Interaction1      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction1';
   code : R4_1_SystemRestfulInteractionEnum ;
   documentation : string ;
}
