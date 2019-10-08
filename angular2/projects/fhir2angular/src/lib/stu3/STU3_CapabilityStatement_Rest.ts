import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CapabilityStatement_Interaction1 } from './STU3_CapabilityStatement_Interaction1'
import { STU3_CapabilityStatement_Operation } from './STU3_CapabilityStatement_Operation'
import { STU3_CapabilityStatement_Resource } from './STU3_CapabilityStatement_Resource'
import { STU3_CapabilityStatement_SearchParam } from './STU3_CapabilityStatement_SearchParam'
import { STU3_CapabilityStatement_Security } from './STU3_CapabilityStatement_Security'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_RestfulCapabilityModeEnum } from './STU3_RestfulCapabilityModeEnum'

export class STU3_CapabilityStatement_Rest      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_Rest';
   mode : STU3_RestfulCapabilityModeEnum ;
   documentation : string ;
   security : STU3_CapabilityStatement_Security ;
   resource : STU3_CapabilityStatement_Resource [];
   interaction : STU3_CapabilityStatement_Interaction1 [];
   searchParam : STU3_CapabilityStatement_SearchParam [];
   operation : STU3_CapabilityStatement_Operation [];
   compartment : string [];
}
