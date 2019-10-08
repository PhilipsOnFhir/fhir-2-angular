import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TypeRestfulInteractionEnum } from './R4_1_TypeRestfulInteractionEnum'

export class R4_1_CapabilityStatement_Interaction      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction';
   code : R4_1_TypeRestfulInteractionEnum ;
   documentation : string ;
}
