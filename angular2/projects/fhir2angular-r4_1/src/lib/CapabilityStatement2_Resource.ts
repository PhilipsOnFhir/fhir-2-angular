import { BackboneElement } from './BackboneElement'
import { CapabilityStatement2_Interaction } from './CapabilityStatement2_Interaction'
import { CapabilityStatement2_Operation } from './CapabilityStatement2_Operation'
import { CapabilityStatement2_SearchParam } from './CapabilityStatement2_SearchParam'
import { DomainResource } from './DomainResource'

export class CapabilityStatement2_Resource      extends BackboneElement
{

   static def : string = 'CapabilityStatement2_Resource';
   type : string ;
   profile : string ;
   supportedProfile : string [];
   documentation : string ;
   interaction : CapabilityStatement2_Interaction [];
   searchParam : CapabilityStatement2_SearchParam [];
   operation : CapabilityStatement2_Operation [];
}
