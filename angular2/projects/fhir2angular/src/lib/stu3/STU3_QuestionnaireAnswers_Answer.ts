import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_QuestionnaireAnswers_Group } from './STU3_QuestionnaireAnswers_Group'
import { STU3_Reference } from './STU3_Reference'

export class STU3_QuestionnaireAnswers_Answer      extends STU3_BackboneElement
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
   valueAttachment : STU3_Attachment ;
   valueCoding : STU3_Coding ;
   valueMeasuredQuantity : string ;
   valueReference : STU3_Reference ;
   group : STU3_QuestionnaireAnswers_Group [];
}
