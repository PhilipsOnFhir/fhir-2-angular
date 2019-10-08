import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_QuestionnaireResponseStatusEnum } from './DSTU2_QuestionnaireResponseStatusEnum'
import { DSTU2_QuestionnaireResponse_Group } from './DSTU2_QuestionnaireResponse_Group'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_QuestionnaireResponse      extends DSTU2_DomainResource
{

   static def : string = 'QuestionnaireResponse';
   identifier : DSTU2_Identifier ;
   questionnaire : DSTU2_Reference ;
   status : DSTU2_QuestionnaireResponseStatusEnum ;
   subject : DSTU2_Reference ;
   author : DSTU2_Reference ;
   authored : string ;
   source : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   group : DSTU2_QuestionnaireResponse_Group ;
}
