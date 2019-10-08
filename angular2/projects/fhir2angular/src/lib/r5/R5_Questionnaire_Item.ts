import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EnableWhenBehaviorEnum } from './R5_EnableWhenBehaviorEnum'
import { R5_QuestionnaireItemTypeEnum } from './R5_QuestionnaireItemTypeEnum'
import { R5_Questionnaire_AnswerOption } from './R5_Questionnaire_AnswerOption'
import { R5_Questionnaire_EnableWhen } from './R5_Questionnaire_EnableWhen'
import { R5_Questionnaire_Initial } from './R5_Questionnaire_Initial'

export class R5_Questionnaire_Item      extends R5_BackboneElement
{

   static def : string = 'Questionnaire_Item';
   linkId : string ;
   definition : string ;
   code : R5_Coding [];
   prefix : string ;
   text : string ;
   type : R5_QuestionnaireItemTypeEnum ;
   enableWhen : R5_Questionnaire_EnableWhen [];
   enableBehavior : R5_EnableWhenBehaviorEnum ;
   required : boolean ;
   repeats : boolean ;
   readOnly : boolean ;
   maxLength : string ;
   answerValueSet : string ;
   answerOption : R5_Questionnaire_AnswerOption [];
   initial : R5_Questionnaire_Initial [];
   item : R5_Questionnaire_Item [];
}
