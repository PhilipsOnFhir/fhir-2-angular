import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TypeRestfulInteractionEnum } from './R5_TypeRestfulInteractionEnum'

export class R5_CapabilityStatement_Interaction      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction';
   code : R5_TypeRestfulInteractionEnum ;
   documentation : string ;
}
