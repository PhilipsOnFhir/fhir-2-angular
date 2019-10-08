import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_QuestionnaireAnswers_Group } from './R4_QuestionnaireAnswers_Group'
import { R4_Reference } from './R4_Reference'

export class R4_QuestionnaireAnswers_Answer      extends R4_BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Answer';
   valueBoolean : boolean ;
   valueDecimal : string ;
   valueInteger : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueInstant : string ;
   valueTime : string ;
   valueString : string ;
   valueUri : string ;
   valueAttachment : R4_Attachment ;
   valueCoding : R4_Coding ;
   valueMeasuredQuantity : string ;
   valueReference : R4_Reference ;
   group : R4_QuestionnaireAnswers_Group [];
}
