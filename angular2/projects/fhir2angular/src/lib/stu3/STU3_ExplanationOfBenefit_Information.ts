import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ExplanationOfBenefit_Information      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Information';
   sequence : string ;
   category : STU3_CodeableConcept ;
   code : STU3_CodeableConcept ;
   timingDate : string ;
   timingPeriod : STU3_Period ;
   valueString : string ;
   valueQuantity : STU3_Quantity ;
   valueAttachment : STU3_Attachment ;
   valueReference : STU3_Reference ;
   reason : STU3_Coding ;
}
