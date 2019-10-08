import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_SystemRestfulInteractionEnum } from './STU3_SystemRestfulInteractionEnum'

export class STU3_CapabilityStatement_Interaction1      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction1';
   code : STU3_SystemRestfulInteractionEnum ;
   documentation : string ;
}
