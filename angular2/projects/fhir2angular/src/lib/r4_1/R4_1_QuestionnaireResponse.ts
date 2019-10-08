import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_QuestionnaireResponseStatusEnum } from './R4_1_QuestionnaireResponseStatusEnum'
import { R4_1_QuestionnaireResponse_Item } from './R4_1_QuestionnaireResponse_Item'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_QuestionnaireResponse      extends R4_1_DomainResource
{

   static def : string = 'QuestionnaireResponse';
   identifier : R4_1_Identifier ;
   basedOn : R4_1_Reference [];
   partOf : R4_1_Reference [];
   questionnaire : string ;
   status : R4_1_QuestionnaireResponseStatusEnum ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   authored : string ;
   author : R4_1_Reference ;
   source : R4_1_Reference ;
   item : R4_1_QuestionnaireResponse_Item [];
}
