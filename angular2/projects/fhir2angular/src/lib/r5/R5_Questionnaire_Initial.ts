import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_Questionnaire_Initial      extends R5_BackboneElement
{

   static def : string = 'Questionnaire_Initial';
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
}
