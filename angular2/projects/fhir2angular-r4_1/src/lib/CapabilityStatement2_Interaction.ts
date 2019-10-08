import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TypeRestfulInteractionEnum } from './TypeRestfulInteractionEnum'

export class CapabilityStatement2_Interaction      extends BackboneElement
{

   static def : string = 'CapabilityStatement2_Interaction';
   code : TypeRestfulInteractionEnum ;
   documentation : string ;
}
