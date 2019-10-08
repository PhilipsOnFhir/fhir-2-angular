import { BackboneElement } from './BackboneElement'
import { ConditionQuestionnairePurposeEnum } from './ConditionQuestionnairePurposeEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ConditionDefinition_Questionnaire      extends BackboneElement
{

   static def : string = 'ConditionDefinition_Questionnaire';
   purpose : ConditionQuestionnairePurposeEnum ;
   reference : Reference ;
}
