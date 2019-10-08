import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Conformance_Interaction1 } from './DSTU2_Conformance_Interaction1'
import { DSTU2_Conformance_Operation } from './DSTU2_Conformance_Operation'
import { DSTU2_Conformance_Resource } from './DSTU2_Conformance_Resource'
import { DSTU2_Conformance_SearchParam } from './DSTU2_Conformance_SearchParam'
import { DSTU2_Conformance_Security } from './DSTU2_Conformance_Security'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_RestfulConformanceModeEnum } from './DSTU2_RestfulConformanceModeEnum'
import { DSTU2_TransactionModeEnum } from './DSTU2_TransactionModeEnum'

export class DSTU2_Conformance_Rest      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Rest';
   mode : DSTU2_RestfulConformanceModeEnum ;
   documentation : string ;
   security : DSTU2_Conformance_Security ;
   resource : DSTU2_Conformance_Resource [];
   interaction : DSTU2_Conformance_Interaction1 [];
   transactionMode : DSTU2_TransactionModeEnum ;
   searchParam : DSTU2_Conformance_SearchParam [];
   operation : DSTU2_Conformance_Operation [];
   compartment : string [];
}
