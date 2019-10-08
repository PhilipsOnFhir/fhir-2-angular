import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Questionnaire_AnswerOption      extends R5_BackboneElement
{

   static def : string = 'Questionnaire_AnswerOption';
   valueInteger : string ;
   valueDate : string ;
   valueTime : string ;
   valueString : string ;
   valueCoding : R5_Coding ;
   valueReference : R5_Reference ;
   initialSelected : boolean ;
}
