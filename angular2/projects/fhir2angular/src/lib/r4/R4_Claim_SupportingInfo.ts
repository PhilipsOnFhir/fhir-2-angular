import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_Claim_SupportingInfo      extends R4_BackboneElement
{

   static def : string = 'Claim_SupportingInfo';
   sequence : string ;
   category : R4_CodeableConcept ;
   code : R4_CodeableConcept ;
   timingDate : string ;
   timingPeriod : R4_Period ;
   valueBoolean : boolean ;
   valueString : string ;
   valueQuantity : R4_Quantity ;
   valueAttachment : R4_Attachment ;
   valueReference : R4_Reference ;
   reason : R4_CodeableConcept ;
}
