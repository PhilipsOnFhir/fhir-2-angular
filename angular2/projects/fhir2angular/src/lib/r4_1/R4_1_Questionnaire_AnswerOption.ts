import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Questionnaire_AnswerOption      extends R4_1_BackboneElement
{

   static def : string = 'Questionnaire_AnswerOption';
   valueInteger : string ;
   valueDate : string ;
   valueTime : string ;
   valueString : string ;
   valueCoding : R4_1_Coding ;
   valueReference : R4_1_Reference ;
   initialSelected : boolean ;
}
