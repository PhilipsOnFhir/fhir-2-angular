import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CapabilityStatement_Interaction1 } from './R4_1_CapabilityStatement_Interaction1'
import { R4_1_CapabilityStatement_Operation } from './R4_1_CapabilityStatement_Operation'
import { R4_1_CapabilityStatement_Resource } from './R4_1_CapabilityStatement_Resource'
import { R4_1_CapabilityStatement_SearchParam } from './R4_1_CapabilityStatement_SearchParam'
import { R4_1_CapabilityStatement_Security } from './R4_1_CapabilityStatement_Security'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_RestfulCapabilityModeEnum } from './R4_1_RestfulCapabilityModeEnum'

export class R4_1_CapabilityStatement_Rest      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Rest';
   mode : R4_1_RestfulCapabilityModeEnum ;
   documentation : string ;
   security : R4_1_CapabilityStatement_Security ;
   resource : R4_1_CapabilityStatement_Resource [];
   interaction : R4_1_CapabilityStatement_Interaction1 [];
   searchParam : R4_1_CapabilityStatement_SearchParam [];
   operation : R4_1_CapabilityStatement_Operation [];
   compartment : string [];
}
