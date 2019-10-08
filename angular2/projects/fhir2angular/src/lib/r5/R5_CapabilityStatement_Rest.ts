import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CapabilityStatement_Interaction1 } from './R5_CapabilityStatement_Interaction1'
import { R5_CapabilityStatement_Operation } from './R5_CapabilityStatement_Operation'
import { R5_CapabilityStatement_Resource } from './R5_CapabilityStatement_Resource'
import { R5_CapabilityStatement_SearchParam } from './R5_CapabilityStatement_SearchParam'
import { R5_CapabilityStatement_Security } from './R5_CapabilityStatement_Security'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_RestfulCapabilityModeEnum } from './R5_RestfulCapabilityModeEnum'

export class R5_CapabilityStatement_Rest      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Rest';
   mode : R5_RestfulCapabilityModeEnum ;
   documentation : string ;
   security : R5_CapabilityStatement_Security ;
   resource : R5_CapabilityStatement_Resource [];
   interaction : R5_CapabilityStatement_Interaction1 [];
   searchParam : R5_CapabilityStatement_SearchParam [];
   operation : R5_CapabilityStatement_Operation [];
   compartment : string [];
}
