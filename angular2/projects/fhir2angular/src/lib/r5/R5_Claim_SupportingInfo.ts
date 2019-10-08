import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_Claim_SupportingInfo      extends R5_BackboneElement
{

   static def : string = 'Claim_SupportingInfo';
   sequence : string ;
   category : R5_CodeableConcept ;
   code : R5_CodeableConcept ;
   timingDate : string ;
   timingPeriod : R5_Period ;
   valueBoolean : boolean ;
   valueString : string ;
   valueQuantity : R5_Quantity ;
   valueAttachment : R5_Attachment ;
   valueReference : R5_Reference ;
   reason : R5_CodeableConcept ;
}
