import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_QuestionnaireResponseStatusEnum } from './R5_QuestionnaireResponseStatusEnum'
import { R5_QuestionnaireResponse_Item } from './R5_QuestionnaireResponse_Item'
import { R5_Reference } from './R5_Reference'

export class R5_QuestionnaireResponse      extends R5_DomainResource
{

   static def : string = 'QuestionnaireResponse';
   identifier : R5_Identifier ;
   basedOn : R5_Reference [];
   partOf : R5_Reference [];
   questionnaire : string ;
   status : R5_QuestionnaireResponseStatusEnum ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   authored : string ;
   author : R5_Reference ;
   source : R5_Reference ;
   item : R5_QuestionnaireResponse_Item [];
}
