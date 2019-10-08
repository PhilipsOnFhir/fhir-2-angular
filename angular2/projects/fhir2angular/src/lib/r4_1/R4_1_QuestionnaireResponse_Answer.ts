import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_QuestionnaireResponse_Item } from './R4_1_QuestionnaireResponse_Item'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_QuestionnaireResponse_Answer      extends R4_1_BackboneElement
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
   valueAttachment : R4_1_Attachment ;
   valueCoding : R4_1_Coding ;
   valueQuantity : R4_1_Quantity ;
   valueReference : R4_1_Reference ;
   item : R4_1_QuestionnaireResponse_Item [];
}
