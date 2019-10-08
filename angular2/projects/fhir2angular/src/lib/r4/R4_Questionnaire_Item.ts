import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EnableWhenBehaviorEnum } from './R4_EnableWhenBehaviorEnum'
import { R4_QuestionnaireItemTypeEnum } from './R4_QuestionnaireItemTypeEnum'
import { R4_Questionnaire_AnswerOption } from './R4_Questionnaire_AnswerOption'
import { R4_Questionnaire_EnableWhen } from './R4_Questionnaire_EnableWhen'
import { R4_Questionnaire_Initial } from './R4_Questionnaire_Initial'

export class R4_Questionnaire_Item      extends R4_BackboneElement
{

   static def : string = 'Questionnaire_Item';
   linkId : string ;
   definition : string ;
   code : R4_Coding [];
   prefix : string ;
   text : string ;
   type : R4_QuestionnaireItemTypeEnum ;
   enableWhen : R4_Questionnaire_EnableWhen [];
   enableBehavior : R4_EnableWhenBehaviorEnum ;
   required : boolean ;
   repeats : boolean ;
   readOnly : boolean ;
   maxLength : string ;
   answerValueSet : string ;
   answerOption : R4_Questionnaire_AnswerOption [];
   initial : R4_Questionnaire_Initial [];
   item : R4_Questionnaire_Item [];
}
