import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CapabilityStatement_Interaction } from './STU3_CapabilityStatement_Interaction'
import { STU3_CapabilityStatement_SearchParam } from './STU3_CapabilityStatement_SearchParam'
import { STU3_ConditionalDeleteStatusEnum } from './STU3_ConditionalDeleteStatusEnum'
import { STU3_ConditionalReadStatusEnum } from './STU3_ConditionalReadStatusEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_ReferenceHandlingPolicyEnum } from './STU3_ReferenceHandlingPolicyEnum'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'
import { STU3_ResourceVersionPolicyEnum } from './STU3_ResourceVersionPolicyEnum'

export class STU3_CapabilityStatement_Resource      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_Resource';
   type : STU3_ResourceTypeEnum ;
   profile : STU3_Reference ;
   documentation : string ;
   interaction : STU3_CapabilityStatement_Interaction [];
   versioning : STU3_ResourceVersionPolicyEnum ;
   readHistory : boolean ;
   updateCreate : boolean ;
   conditionalCreate : boolean ;
   conditionalRead : STU3_ConditionalReadStatusEnum ;
   conditionalUpdate : boolean ;
   conditionalDelete : STU3_ConditionalDeleteStatusEnum ;
   referencePolicy : STU3_ReferenceHandlingPolicyEnum [];
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : STU3_CapabilityStatement_SearchParam [];
}
