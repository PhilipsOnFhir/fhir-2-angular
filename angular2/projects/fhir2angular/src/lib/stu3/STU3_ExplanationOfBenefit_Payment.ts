import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_ExplanationOfBenefit_Payment      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Payment';
   type : STU3_CodeableConcept ;
   adjustment : string ;
   adjustmentReason : STU3_CodeableConcept ;
   date : string ;
   amount : string ;
   identifier : STU3_Identifier ;
}
