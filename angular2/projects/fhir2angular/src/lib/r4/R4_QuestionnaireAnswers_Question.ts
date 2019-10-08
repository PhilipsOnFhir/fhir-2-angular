import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_QuestionnaireAnswers_Answer } from './R4_QuestionnaireAnswers_Answer'

export class R4_QuestionnaireAnswers_Question      extends R4_BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Question';
   linkId : string ;
   text : string ;
   answer : R4_QuestionnaireAnswers_Answer [];
}
