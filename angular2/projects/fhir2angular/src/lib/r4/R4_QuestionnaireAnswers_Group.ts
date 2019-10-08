import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_QuestionnaireAnswers_Question } from './R4_QuestionnaireAnswers_Question'
import { R4_Reference } from './R4_Reference'

export class R4_QuestionnaireAnswers_Group      extends R4_BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Group';
   linkId : string ;
   title : string ;
   text : string ;
   subject : R4_Reference ;
   group : R4_QuestionnaireAnswers_Group [];
   question : R4_QuestionnaireAnswers_Question [];
}
