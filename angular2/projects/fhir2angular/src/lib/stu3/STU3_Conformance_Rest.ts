import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Conformance_Interaction1 } from './STU3_Conformance_Interaction1'
import { STU3_Conformance_Operation } from './STU3_Conformance_Operation'
import { STU3_Conformance_Resource } from './STU3_Conformance_Resource'
import { STU3_Conformance_SearchParam } from './STU3_Conformance_SearchParam'
import { STU3_Conformance_Security } from './STU3_Conformance_Security'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_RestfulConformanceModeEnum } from './STU3_RestfulConformanceModeEnum'

export class STU3_Conformance_Rest      extends STU3_BackboneElement
{

   static def : string = 'Conformance_Rest';
   mode : STU3_RestfulConformanceModeEnum ;
   documentation : string ;
   security : STU3_Conformance_Security ;
   resource : STU3_Conformance_Resource [];
   interaction : STU3_Conformance_Interaction1 [];
   searchParam : STU3_Conformance_SearchParam [];
   operation : STU3_Conformance_Operation [];
   compartment : string [];
}
