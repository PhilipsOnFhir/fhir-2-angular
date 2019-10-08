import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ConditionalDeleteStatusEnum } from './R4_ConditionalDeleteStatusEnum'
import { R4_Conformance_Interaction } from './R4_Conformance_Interaction'
import { R4_Conformance_SearchParam } from './R4_Conformance_SearchParam'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_ResourceVersionPolicyEnum } from './R4_ResourceVersionPolicyEnum'

export class R4_Conformance_Resource      extends R4_BackboneElement
{

   static def : string = 'Conformance_Resource';
   type : string ;
   profile : R4_Reference ;
   interaction : R4_Conformance_Interaction [];
   versioning : R4_ResourceVersionPolicyEnum ;
   readHistory : boolean ;
   updateCreate : boolean ;
   conditionalCreate : boolean ;
   conditionalUpdate : boolean ;
   conditionalDelete : R4_ConditionalDeleteStatusEnum ;
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : R4_Conformance_SearchParam [];
}
