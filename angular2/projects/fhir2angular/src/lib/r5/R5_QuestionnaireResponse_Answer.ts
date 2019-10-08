import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_QuestionnaireResponse_Item } from './R5_QuestionnaireResponse_Item'
import { R5_Reference } from './R5_Reference'

export class R5_QuestionnaireResponse_Answer      extends R5_BackboneElement
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
   valueAttachment : R5_Attachment ;
   valueCoding : R5_Coding ;
   valueQuantity : R5_Quantity ;
   valueReference : R5_Reference ;
   item : R5_QuestionnaireResponse_Item [];
}
