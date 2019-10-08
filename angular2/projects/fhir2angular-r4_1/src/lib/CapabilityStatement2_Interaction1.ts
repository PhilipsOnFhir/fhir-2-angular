import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SystemRestfulInteractionEnum } from './SystemRestfulInteractionEnum'

export class CapabilityStatement2_Interaction1      extends BackboneElement
{

   static def : string = 'CapabilityStatement2_Interaction1';
   code : SystemRestfulInteractionEnum ;
   documentation : string ;
}
