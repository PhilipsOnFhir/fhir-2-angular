import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ExplanationOfBenefit_Adjudication } from './ExplanationOfBenefit_Adjudication'
import { ExplanationOfBenefit_SubDetail } from './ExplanationOfBenefit_SubDetail'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class ExplanationOfBenefit_Detail      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Detail';
   sequence : string ;
   type : CodeableConcept ;
   revenue : CodeableConcept ;
   category : CodeableConcept ;
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   programCode : CodeableConcept [];
   quantity : Quantity ;
   unitPrice : string ;
   factor : string ;
   net : string ;
   udi : Reference [];
   noteNumber : string [];
   adjudication : ExplanationOfBenefit_Adjudication [];
   subDetail : ExplanationOfBenefit_SubDetail [];
}
