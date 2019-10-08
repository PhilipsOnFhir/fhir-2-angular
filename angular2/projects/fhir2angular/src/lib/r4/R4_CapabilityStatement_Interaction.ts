import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TypeRestfulInteractionEnum } from './R4_TypeRestfulInteractionEnum'

export class R4_CapabilityStatement_Interaction      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction';
   code : R4_TypeRestfulInteractionEnum ;
   documentation : string ;
}
