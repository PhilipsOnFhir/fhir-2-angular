import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_QuestionnaireResponse_Question } from './R4_QuestionnaireResponse_Question'
import { R4_Reference } from './R4_Reference'

export class R4_QuestionnaireResponse_Group      extends R4_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Group';
   linkId : string ;
   title : string ;
   text : string ;
   subject : R4_Reference ;
   group : R4_QuestionnaireResponse_Group [];
   question : R4_QuestionnaireResponse_Question [];
}
