import { DSTU2_AnswerFormatEnum } from './DSTU2_AnswerFormatEnum'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Questionnaire_Group } from './DSTU2_Questionnaire_Group'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Questionnaire_Question      extends DSTU2_BackboneElement
{

   static def : string = 'Questionnaire_Question';
   linkId : string ;
   concept : DSTU2_Coding [];
   text : string ;
   type : DSTU2_AnswerFormatEnum ;
   required : boolean ;
   repeats : boolean ;
   options : DSTU2_Reference ;
   option : DSTU2_Coding [];
   group : DSTU2_Questionnaire_Group [];
}
