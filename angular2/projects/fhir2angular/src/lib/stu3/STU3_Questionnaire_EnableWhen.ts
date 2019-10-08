import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Questionnaire_EnableWhen      extends STU3_BackboneElement
{

   static def : string = 'Questionnaire_EnableWhen';
   question : string ;
   hasAnswer : boolean ;
   answerBoolean : boolean ;
   answerDecimal : string ;
   answerInteger : string ;
   answerDate : string ;
   answerDateTime : string ;
   answerTime : string ;
   answerString : string ;
   answerUri : string ;
   answerAttachment : STU3_Attachment ;
   answerCoding : STU3_Coding ;
   answerQuantity : STU3_Quantity ;
   answerReference : STU3_Reference ;
}
