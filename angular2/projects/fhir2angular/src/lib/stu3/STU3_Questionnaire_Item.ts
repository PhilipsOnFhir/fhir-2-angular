import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_QuestionnaireItemTypeEnum } from './STU3_QuestionnaireItemTypeEnum'
import { STU3_Questionnaire_EnableWhen } from './STU3_Questionnaire_EnableWhen'
import { STU3_Questionnaire_Option } from './STU3_Questionnaire_Option'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Questionnaire_Item      extends STU3_BackboneElement
{

   static def : string = 'Questionnaire_Item';
   linkId : string ;
   definition : string ;
   code : STU3_Coding [];
   prefix : string ;
   text : string ;
   type : STU3_QuestionnaireItemTypeEnum ;
   enableWhen : STU3_Questionnaire_EnableWhen [];
   required : boolean ;
   repeats : boolean ;
   readOnly : boolean ;
   maxLength : string ;
   options : STU3_Reference ;
   option : STU3_Questionnaire_Option [];
   initialBoolean : boolean ;
   initialDecimal : string ;
   initialInteger : string ;
   initialDate : string ;
   initialDateTime : string ;
   initialTime : string ;
   initialString : string ;
   initialUri : string ;
   initialAttachment : STU3_Attachment ;
   initialCoding : STU3_Coding ;
   initialQuantity : STU3_Quantity ;
   initialReference : STU3_Reference ;
   item : STU3_Questionnaire_Item [];
}
