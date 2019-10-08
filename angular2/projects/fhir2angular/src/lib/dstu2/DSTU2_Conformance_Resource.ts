import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ConditionalDeleteStatusEnum } from './DSTU2_ConditionalDeleteStatusEnum'
import { DSTU2_Conformance_Interaction } from './DSTU2_Conformance_Interaction'
import { DSTU2_Conformance_SearchParam } from './DSTU2_Conformance_SearchParam'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_ResourceVersionPolicyEnum } from './DSTU2_ResourceVersionPolicyEnum'

export class DSTU2_Conformance_Resource      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Resource';
   type : string ;
   profile : DSTU2_Reference ;
   interaction : DSTU2_Conformance_Interaction [];
   versioning : DSTU2_ResourceVersionPolicyEnum ;
   readHistory : boolean ;
   updateCreate : boolean ;
   conditionalCreate : boolean ;
   conditionalUpdate : boolean ;
   conditionalDelete : DSTU2_ConditionalDeleteStatusEnum ;
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : DSTU2_Conformance_SearchParam [];
}
