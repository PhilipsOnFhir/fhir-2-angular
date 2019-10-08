import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_QuestionnaireResponse_Item } from './STU3_QuestionnaireResponse_Item'
import { STU3_Reference } from './STU3_Reference'

export class STU3_QuestionnaireResponse_Answer      extends STU3_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Answer';
   valueBoolean : boolean ;
   valueDecimal : string ;
   valueInteger : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueTime : string ;
   valueString : string ;
   valueUri : string ;
   valueAttachment : STU3_Attachment ;
   valueCoding : STU3_Coding ;
   valueQuantity : STU3_Quantity ;
   valueReference : STU3_Reference ;
   item : STU3_QuestionnaireResponse_Item [];
}
