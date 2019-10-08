import { STU3_Address } from './STU3_Address'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ExplanationOfBenefit_Accident      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Accident';
   date : string ;
   type : STU3_CodeableConcept ;
   locationAddress : STU3_Address ;
   locationReference : STU3_Reference ;
}
