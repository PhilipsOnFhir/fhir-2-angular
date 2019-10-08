import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EnableWhenBehaviorEnum } from './R4_1_EnableWhenBehaviorEnum'
import { R4_1_QuestionnaireItemTypeEnum } from './R4_1_QuestionnaireItemTypeEnum'
import { R4_1_Questionnaire_AnswerOption } from './R4_1_Questionnaire_AnswerOption'
import { R4_1_Questionnaire_EnableWhen } from './R4_1_Questionnaire_EnableWhen'
import { R4_1_Questionnaire_Initial } from './R4_1_Questionnaire_Initial'

export class R4_1_Questionnaire_Item      extends R4_1_BackboneElement
{

   static def : string = 'Questionnaire_Item';
   linkId : string ;
   definition : string ;
   code : R4_1_Coding [];
   prefix : string ;
   text : string ;
   type : R4_1_QuestionnaireItemTypeEnum ;
   enableWhen : R4_1_Questionnaire_EnableWhen [];
   enableBehavior : R4_1_EnableWhenBehaviorEnum ;
   required : boolean ;
   repeats : boolean ;
   readOnly : boolean ;
   maxLength : string ;
   answerValueSet : string ;
   answerOption : R4_1_Questionnaire_AnswerOption [];
   initial : R4_1_Questionnaire_Initial [];
   item : R4_1_Questionnaire_Item [];
}
