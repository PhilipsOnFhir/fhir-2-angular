import { R5_ActionConditionKindEnum } from './R5_ActionConditionKindEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Expression } from './R5_Expression'

export class R5_PlanDefinition_Condition      extends R5_BackboneElement
{

   static def : string = 'PlanDefinition_Condition';
   kind : R5_ActionConditionKindEnum ;
   expression : R5_Expression ;
}
