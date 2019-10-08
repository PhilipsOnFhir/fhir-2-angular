import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_QuestionnaireResponseStatusEnum } from './R4_QuestionnaireResponseStatusEnum'
import { R4_QuestionnaireResponse_Item } from './R4_QuestionnaireResponse_Item'
import { R4_Reference } from './R4_Reference'

export class R4_QuestionnaireResponse      extends R4_DomainResource
{

   static def : string = 'QuestionnaireResponse';
   identifier : R4_Identifier ;
   basedOn : R4_Reference [];
   partOf : R4_Reference [];
   questionnaire : string ;
   status : R4_QuestionnaireResponseStatusEnum ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   authored : string ;
   author : R4_Reference ;
   source : R4_Reference ;
   item : R4_QuestionnaireResponse_Item [];
}
