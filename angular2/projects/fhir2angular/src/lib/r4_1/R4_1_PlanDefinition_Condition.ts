import { R4_1_ActionConditionKindEnum } from './R4_1_ActionConditionKindEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Expression } from './R4_1_Expression'

export class R4_1_PlanDefinition_Condition      extends R4_1_BackboneElement
{

   static def : string = 'PlanDefinition_Condition';
   kind : R4_1_ActionConditionKindEnum ;
   expression : R4_1_Expression ;
}
