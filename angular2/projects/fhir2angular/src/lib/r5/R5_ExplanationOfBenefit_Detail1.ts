import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExplanationOfBenefit_Adjudication } from './R5_ExplanationOfBenefit_Adjudication'
import { R5_ExplanationOfBenefit_SubDetail1 } from './R5_ExplanationOfBenefit_SubDetail1'
import { R5_Money } from './R5_Money'
import { R5_Quantity } from './R5_Quantity'

export class R5_ExplanationOfBenefit_Detail1      extends R5_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Detail1';
   productOrService : R5_CodeableConcept ;
   modifier : R5_CodeableConcept [];
   quantity : R5_Quantity ;
   unitPrice : R5_Money ;
   factor : string ;
   net : R5_Money ;
   noteNumber : string [];
   adjudication : R5_ExplanationOfBenefit_Adjudication [];
   subDetail : R5_ExplanationOfBenefit_SubDetail1 [];
}
