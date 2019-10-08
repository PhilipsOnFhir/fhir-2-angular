import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExplanationOfBenefit_Adjudication } from './STU3_ExplanationOfBenefit_Adjudication'
import { STU3_ExplanationOfBenefit_Detail1 } from './STU3_ExplanationOfBenefit_Detail1'

export class STU3_ExplanationOfBenefit_AddItem      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_AddItem';
   sequenceLinkId : string [];
   revenue : STU3_CodeableConcept ;
   category : STU3_CodeableConcept ;
   service : STU3_CodeableConcept ;
   modifier : STU3_CodeableConcept [];
   fee : string ;
   noteNumber : string [];
   adjudication : STU3_ExplanationOfBenefit_Adjudication [];
   detail : STU3_ExplanationOfBenefit_Detail1 [];
}
