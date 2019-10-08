import { BackboneElement } from './BackboneElement'
import { CapabilityStatement2_Interaction1 } from './CapabilityStatement2_Interaction1'
import { CapabilityStatement2_Operation } from './CapabilityStatement2_Operation'
import { CapabilityStatement2_Resource } from './CapabilityStatement2_Resource'
import { CapabilityStatement2_SearchParam } from './CapabilityStatement2_SearchParam'
import { DomainResource } from './DomainResource'
import { RestfulCapabilityModeEnum } from './RestfulCapabilityModeEnum'

export class CapabilityStatement2_Rest      extends BackboneElement
{

   static def : string = 'CapabilityStatement2_Rest';
   mode : RestfulCapabilityModeEnum ;
   documentation : string ;
   resource : CapabilityStatement2_Resource [];
   interaction : CapabilityStatement2_Interaction1 [];
   searchParam : CapabilityStatement2_SearchParam [];
   operation : CapabilityStatement2_Operation [];
   compartment : string [];
}
