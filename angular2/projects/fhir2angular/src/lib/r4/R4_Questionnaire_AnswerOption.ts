import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Questionnaire_AnswerOption      extends R4_BackboneElement
{

   static def : string = 'Questionnaire_AnswerOption';
   valueInteger : string ;
   valueDate : string ;
   valueTime : string ;
   valueString : string ;
   valueCoding : R4_Coding ;
   valueReference : R4_Reference ;
   initialSelected : boolean ;
}
