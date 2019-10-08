import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ExplanationOfBenefit_Payee      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Payee';
   type : STU3_CodeableConcept ;
   resourceType : STU3_CodeableConcept ;
   party : STU3_Reference ;
}
