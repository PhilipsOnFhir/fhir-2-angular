import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_QuestionnaireItemOperatorEnum } from './R4_QuestionnaireItemOperatorEnum'
import { R4_Reference } from './R4_Reference'

export class R4_Questionnaire_EnableWhen      extends R4_BackboneElement
{

   static def : string = 'Questionnaire_EnableWhen';
   question : string ;
   operator : R4_QuestionnaireItemOperatorEnum ;
   answerBoolean : boolean ;
   answerDecimal : string ;
   answerInteger : string ;
   answerDate : string ;
   answerDateTime : string ;
   answerTime : string ;
   answerString : string ;
   answerCoding : R4_Coding ;
   answerQuantity : R4_Quantity ;
   answerReference : R4_Reference ;
}
