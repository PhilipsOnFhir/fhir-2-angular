import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_QuestionnaireAnswers_Answer } from './STU3_QuestionnaireAnswers_Answer'

export class STU3_QuestionnaireAnswers_Question      extends STU3_BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Question';
   linkId : string ;
   text : string ;
   answer : STU3_QuestionnaireAnswers_Answer [];
}
