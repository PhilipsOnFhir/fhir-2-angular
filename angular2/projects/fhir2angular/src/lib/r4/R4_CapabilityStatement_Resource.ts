import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CapabilityStatement_Interaction } from './R4_CapabilityStatement_Interaction'
import { R4_CapabilityStatement_Operation } from './R4_CapabilityStatement_Operation'
import { R4_CapabilityStatement_SearchParam } from './R4_CapabilityStatement_SearchParam'
import { R4_ConditionalDeleteStatusEnum } from './R4_ConditionalDeleteStatusEnum'
import { R4_ConditionalReadStatusEnum } from './R4_ConditionalReadStatusEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ReferenceHandlingPolicyEnum } from './R4_ReferenceHandlingPolicyEnum'
import { R4_ResourceVersionPolicyEnum } from './R4_ResourceVersionPolicyEnum'

export class R4_CapabilityStatement_Resource      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_Resource';
   type : string ;
   profile : string ;
   supportedProfile : string [];
   documentation : string ;
   interaction : R4_CapabilityStatement_Interaction [];
   versioning : R4_ResourceVersionPolicyEnum ;
   readHistory : boolean ;
   updateCreate : boolean ;
   conditionalCreate : boolean ;
   conditionalRead : R4_ConditionalReadStatusEnum ;
   conditionalUpdate : boolean ;
   conditionalDelete : R4_ConditionalDeleteStatusEnum ;
   referencePolicy : R4_ReferenceHandlingPolicyEnum [];
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : R4_CapabilityStatement_SearchParam [];
   operation : R4_CapabilityStatement_Operation [];
}
