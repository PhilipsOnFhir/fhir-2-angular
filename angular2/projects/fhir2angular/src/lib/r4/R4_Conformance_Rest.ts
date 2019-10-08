import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Conformance_Interaction1 } from './R4_Conformance_Interaction1'
import { R4_Conformance_Operation } from './R4_Conformance_Operation'
import { R4_Conformance_Resource } from './R4_Conformance_Resource'
import { R4_Conformance_SearchParam } from './R4_Conformance_SearchParam'
import { R4_Conformance_Security } from './R4_Conformance_Security'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_RestfulConformanceModeEnum } from './R4_RestfulConformanceModeEnum'
import { R4_TransactionModeEnum } from './R4_TransactionModeEnum'

export class R4_Conformance_Rest      extends R4_BackboneElement
{

   static def : string = 'Conformance_Rest';
   mode : R4_RestfulConformanceModeEnum ;
   documentation : string ;
   security : R4_Conformance_Security ;
   resource : R4_Conformance_Resource [];
   interaction : R4_Conformance_Interaction1 [];
   transactionMode : R4_TransactionModeEnum ;
   searchParam : R4_Conformance_SearchParam [];
   operation : R4_Conformance_Operation [];
   compartment : string [];
}
