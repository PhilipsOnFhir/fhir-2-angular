import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TypeRestfulInteractionEnum } from './STU3_TypeRestfulInteractionEnum'

export class STU3_CapabilityStatement_Interaction      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction';
   code : STU3_TypeRestfulInteractionEnum ;
   documentation : string ;
}
