import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SystemRestfulInteractionEnum } from './DSTU2_SystemRestfulInteractionEnum'

export class DSTU2_Conformance_Interaction1      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Interaction1';
   code : DSTU2_SystemRestfulInteractionEnum ;
   documentation : string ;
}
