import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_QuestionnaireResponseStatusEnum } from './STU3_QuestionnaireResponseStatusEnum'
import { STU3_QuestionnaireResponse_Item } from './STU3_QuestionnaireResponse_Item'
import { STU3_Reference } from './STU3_Reference'

export class STU3_QuestionnaireResponse      extends STU3_DomainResource
{

   static def : string = 'QuestionnaireResponse';
   identifier : STU3_Identifier ;
   basedOn : STU3_Reference [];
   parent : STU3_Reference [];
   questionnaire : STU3_Reference ;
   status : STU3_QuestionnaireResponseStatusEnum ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   authored : string ;
   author : STU3_Reference ;
   source : STU3_Reference ;
   item : STU3_QuestionnaireResponse_Item [];
}
