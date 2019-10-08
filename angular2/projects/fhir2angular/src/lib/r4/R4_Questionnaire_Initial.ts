import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_Questionnaire_Initial      extends R4_BackboneElement
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
   valueAttachment : R4_Attachment ;
   valueCoding : R4_Coding ;
   valueQuantity : R4_Quantity ;
   valueReference : R4_Reference ;
}
