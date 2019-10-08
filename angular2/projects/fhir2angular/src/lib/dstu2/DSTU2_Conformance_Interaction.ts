import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_TypeRestfulInteractionEnum } from './DSTU2_TypeRestfulInteractionEnum'

export class DSTU2_Conformance_Interaction      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Interaction';
   code : DSTU2_TypeRestfulInteractionEnum ;
   documentation : string ;
}
