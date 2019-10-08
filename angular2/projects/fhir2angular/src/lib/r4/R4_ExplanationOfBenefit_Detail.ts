import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExplanationOfBenefit_Adjudication } from './R4_ExplanationOfBenefit_Adjudication'
import { R4_ExplanationOfBenefit_SubDetail } from './R4_ExplanationOfBenefit_SubDetail'
import { R4_Money } from './R4_Money'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_ExplanationOfBenefit_Detail      extends R4_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Detail';
   sequence : string ;
   revenue : R4_CodeableConcept ;
   category : R4_CodeableConcept ;
   productOrService : R4_CodeableConcept ;
   modifier : R4_CodeableConcept [];
   programCode : R4_CodeableConcept [];
   quantity : R4_Quantity ;
   unitPrice : R4_Money ;
   factor : string ;
   net : R4_Money ;
   udi : R4_Reference [];
   noteNumber : string [];
   adjudication : R4_ExplanationOfBenefit_Adjudication [];
   subDetail : R4_ExplanationOfBenefit_SubDetail [];
}
