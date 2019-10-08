import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SystemRestfulInteractionEnum } from './R4_SystemRestfulInteractionEnum'

export class R4_Conformance_Interaction1      extends R4_BackboneElement
{

   static def : string = 'Conformance_Interaction1';
   code : R4_SystemRestfulInteractionEnum ;
   documentation : string ;
}
