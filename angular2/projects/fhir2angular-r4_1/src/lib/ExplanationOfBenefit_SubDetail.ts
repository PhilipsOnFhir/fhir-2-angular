import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ExplanationOfBenefit_Adjudication } from './ExplanationOfBenefit_Adjudication'
import { Money } from './Money'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class ExplanationOfBenefit_SubDetail      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_SubDetail';
   sequence : string ;
   revenue : CodeableConcept ;
   category : CodeableConcept ;
   productOrService : CodeableConcept ;
   modifier : CodeableConcept [];
   programCode : CodeableConcept [];
   quantity : Quantity ;
   unitPrice : Money ;
   factor : string ;
   net : Money ;
   udi : Reference [];
   noteNumber : string [];
   adjudication : ExplanationOfBenefit_Adjudication [];
}
