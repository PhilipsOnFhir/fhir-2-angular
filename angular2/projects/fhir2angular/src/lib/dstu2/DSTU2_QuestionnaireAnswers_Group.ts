import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_QuestionnaireAnswers_Question } from './DSTU2_QuestionnaireAnswers_Question'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_QuestionnaireAnswers_Group      extends DSTU2_BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Group';
   linkId : string ;
   title : string ;
   text : string ;
   subject : DSTU2_Reference ;
   group : DSTU2_QuestionnaireAnswers_Group [];
   question : DSTU2_QuestionnaireAnswers_Question [];
}
