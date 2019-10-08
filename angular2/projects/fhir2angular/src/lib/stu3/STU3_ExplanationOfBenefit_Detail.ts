import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExplanationOfBenefit_Adjudication } from './STU3_ExplanationOfBenefit_Adjudication'
import { STU3_ExplanationOfBenefit_SubDetail } from './STU3_ExplanationOfBenefit_SubDetail'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ExplanationOfBenefit_Detail      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Detail';
   sequence : string ;
   type : STU3_CodeableConcept ;
   revenue : STU3_CodeableConcept ;
   category : STU3_CodeableConcept ;
   service : STU3_CodeableConcept ;
   modifier : STU3_CodeableConcept [];
   programCode : STU3_CodeableConcept [];
   quantity : STU3_Quantity ;
   unitPrice : string ;
   factor : string ;
   net : string ;
   udi : STU3_Reference [];
   noteNumber : string [];
   adjudication : STU3_ExplanationOfBenefit_Adjudication [];
   subDetail : STU3_ExplanationOfBenefit_SubDetail [];
}
