import { R4_AnswerFormatEnum } from './R4_AnswerFormatEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Questionnaire_Group } from './R4_Questionnaire_Group'
import { R4_Reference } from './R4_Reference'

export class R4_Questionnaire_Question      extends R4_BackboneElement
{

   static def : string = 'Questionnaire_Question';
   linkId : string ;
   concept : R4_Coding [];
   text : string ;
   type : R4_AnswerFormatEnum ;
   required : boolean ;
   repeats : boolean ;
   options : R4_Reference ;
   option : R4_Coding [];
   group : R4_Questionnaire_Group [];
}
