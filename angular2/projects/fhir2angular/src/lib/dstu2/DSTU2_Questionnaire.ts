import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_QuestionnaireStatusEnum } from './DSTU2_QuestionnaireStatusEnum'
import { DSTU2_Questionnaire_Group } from './DSTU2_Questionnaire_Group'

export class DSTU2_Questionnaire      extends DSTU2_DomainResource
{

   static def : string = 'Questionnaire';
   identifier : DSTU2_Identifier [];
   version : string ;
   status : DSTU2_QuestionnaireStatusEnum ;
   date : string ;
   publisher : string ;
   telecom : DSTU2_ContactPoint [];
   subjectType : string [];
   group : DSTU2_Questionnaire_Group ;
}
