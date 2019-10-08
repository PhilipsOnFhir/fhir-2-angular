import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Contract_Answer      extends R4_1_BackboneElement
{

   static def : string = 'Contract_Answer';
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
}
