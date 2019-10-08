import { R4_Address } from './R4_Address'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExplanationOfBenefit_Adjudication } from './R4_ExplanationOfBenefit_Adjudication'
import { R4_ExplanationOfBenefit_Detail1 } from './R4_ExplanationOfBenefit_Detail1'
import { R4_Money } from './R4_Money'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_ExplanationOfBenefit_AddItem      extends R4_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_AddItem';
   itemSequence : string [];
   detailSequence : string [];
   subDetailSequence : string [];
   provider : R4_Reference [];
   productOrService : R4_CodeableConcept ;
   modifier : R4_CodeableConcept [];
   programCode : R4_CodeableConcept [];
   servicedDate : string ;
   servicedPeriod : R4_Period ;
   locationCodeableConcept : R4_CodeableConcept ;
   locationAddress : R4_Address ;
   locationReference : R4_Reference ;
   quantity : R4_Quantity ;
   unitPrice : R4_Money ;
   factor : string ;
   net : R4_Money ;
   bodySite : R4_CodeableConcept ;
   subSite : R4_CodeableConcept [];
   noteNumber : string [];
   adjudication : R4_ExplanationOfBenefit_Adjudication [];
   detail : R4_ExplanationOfBenefit_Detail1 [];
}
