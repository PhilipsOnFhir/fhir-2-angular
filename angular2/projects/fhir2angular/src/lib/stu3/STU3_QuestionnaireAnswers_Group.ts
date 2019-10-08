import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_QuestionnaireAnswers_Question } from './STU3_QuestionnaireAnswers_Question'
import { STU3_Reference } from './STU3_Reference'

export class STU3_QuestionnaireAnswers_Group      extends STU3_BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Group';
   linkId : string ;
   title : string ;
   text : string ;
   subject : STU3_Reference ;
   group : STU3_QuestionnaireAnswers_Group [];
   question : STU3_QuestionnaireAnswers_Question [];
}
