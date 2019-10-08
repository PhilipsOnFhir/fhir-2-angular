import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_QuestionnaireItemOperatorEnum } from './R5_QuestionnaireItemOperatorEnum'
import { R5_Reference } from './R5_Reference'

export class R5_Questionnaire_EnableWhen      extends R5_BackboneElement
{

   static def : string = 'Questionnaire_EnableWhen';
   question : string ;
   operator : R5_QuestionnaireItemOperatorEnum ;
   answerBoolean : boolean ;
   answerDecimal : string ;
   answerInteger : string ;
   answerDate : string ;
   answerDateTime : string ;
   answerTime : string ;
   answerString : string ;
   answerCoding : R5_Coding ;
   answerQuantity : R5_Quantity ;
   answerReference : R5_Reference ;
}
