import { STU3_ActionConditionKindEnum } from './STU3_ActionConditionKindEnum'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_RequestGroup_Condition      extends STU3_BackboneElement
{

   static def : string = 'RequestGroup_Condition';
   kind : STU3_ActionConditionKindEnum ;
   description : string ;
   language : string ;
   expression : string ;
}
