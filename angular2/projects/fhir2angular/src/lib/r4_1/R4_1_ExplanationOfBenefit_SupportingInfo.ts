import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ExplanationOfBenefit_SupportingInfo      extends R4_1_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_SupportingInfo';
   sequence : string ;
   category : R4_1_CodeableConcept ;
   code : R4_1_CodeableConcept ;
   timingDate : string ;
   timingPeriod : R4_1_Period ;
   valueBoolean : boolean ;
   valueString : string ;
   valueQuantity : R4_1_Quantity ;
   valueAttachment : R4_1_Attachment ;
   valueReference : R4_1_Reference ;
   reason : R4_1_Coding ;
}
