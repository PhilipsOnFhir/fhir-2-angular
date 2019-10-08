import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_QuestionnaireAnswersStatusEnum } from './DSTU2_QuestionnaireAnswersStatusEnum'
import { DSTU2_QuestionnaireAnswers_Group } from './DSTU2_QuestionnaireAnswers_Group'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_QuestionnaireAnswers      extends DSTU2_DomainResource
{

   static def : string = 'QuestionnaireAnswers';
   identifier : DSTU2_Identifier ;
   questionnaire : DSTU2_Reference ;
   status : DSTU2_QuestionnaireAnswersStatusEnum ;
   subject : DSTU2_Reference ;
   author : DSTU2_Reference ;
   authored : string ;
   source : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   group : DSTU2_QuestionnaireAnswers_Group ;
}
