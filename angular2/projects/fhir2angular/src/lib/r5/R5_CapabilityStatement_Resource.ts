import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CapabilityStatement_Interaction } from './R5_CapabilityStatement_Interaction'
import { R5_CapabilityStatement_Operation } from './R5_CapabilityStatement_Operation'
import { R5_CapabilityStatement_SearchParam } from './R5_CapabilityStatement_SearchParam'
import { R5_ConditionalDeleteStatusEnum } from './R5_ConditionalDeleteStatusEnum'
import { R5_ConditionalReadStatusEnum } from './R5_ConditionalReadStatusEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ReferenceHandlingPolicyEnum } from './R5_ReferenceHandlingPolicyEnum'
import { R5_ResourceVersionPolicyEnum } from './R5_ResourceVersionPolicyEnum'

export class R5_CapabilityStatement_Resource      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Resource';
   type : string ;
   profile : string ;
   supportedProfile : string [];
   documentation : string ;
   interaction : R5_CapabilityStatement_Interaction [];
   versioning : R5_ResourceVersionPolicyEnum ;
   readHistory : boolean ;
   updateCreate : boolean ;
   conditionalCreate : boolean ;
   conditionalRead : R5_ConditionalReadStatusEnum ;
   conditionalUpdate : boolean ;
   conditionalDelete : R5_ConditionalDeleteStatusEnum ;
   referencePolicy : R5_ReferenceHandlingPolicyEnum [];
   searchInclude : string [];
   searchRevInclude : string [];
   searchParam : R5_CapabilityStatement_SearchParam [];
   operation : R5_CapabilityStatement_Operation [];
}
