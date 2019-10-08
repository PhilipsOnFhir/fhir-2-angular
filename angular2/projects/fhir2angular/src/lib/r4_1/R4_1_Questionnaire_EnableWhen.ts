import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_QuestionnaireItemOperatorEnum } from './R4_1_QuestionnaireItemOperatorEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Questionnaire_EnableWhen      extends R4_1_BackboneElement
{

   static def : string = 'Questionnaire_EnableWhen';
   question : string ;
   operator : R4_1_QuestionnaireItemOperatorEnum ;
   answerBoolean : boolean ;
   answerDecimal : string ;
   answerInteger : string ;
   answerDate : string ;
   answerDateTime : string ;
   answerTime : string ;
   answerString : string ;
   answerCoding : R4_1_Coding ;
   answerQuantity : R4_1_Quantity ;
   answerReference : R4_1_Reference ;
}
