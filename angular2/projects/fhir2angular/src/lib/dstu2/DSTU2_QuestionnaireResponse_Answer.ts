import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Quantity } from './DSTU2_Quantity'
import { DSTU2_QuestionnaireResponse_Group } from './DSTU2_QuestionnaireResponse_Group'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_QuestionnaireResponse_Answer      extends DSTU2_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Answer';
   valueBoolean : boolean ;
   valueDecimal : string ;
   valueInteger : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueInstant : string ;
   valueTime : string ;
   valueString : string ;
   valueUri : string ;
   valueAttachment : DSTU2_Attachment ;
   valueCoding : DSTU2_Coding ;
   valueQuantity : DSTU2_Quantity ;
   valueReference : DSTU2_Reference ;
   group : DSTU2_QuestionnaireResponse_Group [];
}
