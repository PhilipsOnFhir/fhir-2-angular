import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_QuestionnaireAnswersStatusEnum } from './STU3_QuestionnaireAnswersStatusEnum'
import { STU3_QuestionnaireAnswers_Group } from './STU3_QuestionnaireAnswers_Group'
import { STU3_Reference } from './STU3_Reference'

export class STU3_QuestionnaireAnswers      extends STU3_DomainResource
{

   static def : string = 'QuestionnaireAnswers';
   identifier : STU3_Identifier ;
   questionnaire : STU3_Reference ;
   status : STU3_QuestionnaireAnswersStatusEnum ;
   subject : STU3_Reference ;
   author : STU3_Reference ;
   authored : string ;
   source : STU3_Reference ;
   encounter : STU3_Reference ;
   group : STU3_QuestionnaireAnswers_Group ;
}
