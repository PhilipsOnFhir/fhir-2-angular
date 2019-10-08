import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CapabilityStatement_Interaction } from './R4_1_CapabilityStatement_Interaction'
import { R4_1_CapabilityStatement_Operation } from './R4_1_CapabilityStatement_Operation'
import { R4_1_CapabilityStatement_SearchParam } from './R4_1_CapabilityStatement_SearchParam'
import { R4_1_ConditionalDeleteStatusEnum } from './R4_1_ConditionalDeleteStatusEnum'
import { R4_1_ConditionalReadStatusEnum } from './R4_1_ConditionalReadStatusEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ReferenceHandlingPolicyEnum } from './R4_1_ReferenceHandlingPolicyEnum'
import { R4_1_ResourceVersionPolicyEnum } from './R4_1_ResourceVersionPolicyEnum'

export class R4_1_CapabilityStatement_Resource      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Resource';
   type : string ;
   profile : string ;
   supportedProfile : string [];
   documentation : string ;
   interaction : R4_1_CapabilityStatement_Interaction [];
   versioning : R4_1_ResourceVersionPolicyEnum ;
   readHistory : boolean ;
   updateCreate : boolean ;
   conditionalCreate : boolean ;
   conditionalRead : R4_1_ConditionalReadStatusEnum ;
   conditionalUpdate : boolean ;
   conditionalDelete : R4_1_ConditionalDeleteStatusEnum ;
   referencePolicy : R4_1_ReferenceHandlingPolicyEnum [];
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : R4_1_CapabilityStatement_SearchParam [];
   operation : R4_1_CapabilityStatement_Operation [];
}
