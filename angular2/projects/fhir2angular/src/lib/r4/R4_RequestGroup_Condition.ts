import { R4_ActionConditionKindEnum } from './R4_ActionConditionKindEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Expression } from './R4_Expression'

export class R4_RequestGroup_Condition      extends R4_BackboneElement
{

   static def : string = 'RequestGroup_Condition';
   kind : R4_ActionConditionKindEnum ;
   expression : R4_Expression ;
}
