import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_QuestionnaireAnswersStatusEnum } from './R4_QuestionnaireAnswersStatusEnum'
import { R4_QuestionnaireAnswers_Group } from './R4_QuestionnaireAnswers_Group'
import { R4_Reference } from './R4_Reference'

export class R4_QuestionnaireAnswers      extends R4_DomainResource
{

   static def : string = 'QuestionnaireAnswers';
   identifier : R4_Identifier ;
   questionnaire : R4_Reference ;
   status : R4_QuestionnaireAnswersStatusEnum ;
   subject : R4_Reference ;
   author : R4_Reference ;
   authored : string ;
   source : R4_Reference ;
   encounter : R4_Reference ;
   group : R4_QuestionnaireAnswers_Group ;
}
