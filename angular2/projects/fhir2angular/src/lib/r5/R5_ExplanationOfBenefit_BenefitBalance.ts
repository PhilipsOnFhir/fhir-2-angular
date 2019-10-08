import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExplanationOfBenefit_Financial } from './R5_ExplanationOfBenefit_Financial'

export class R5_ExplanationOfBenefit_BenefitBalance      extends R5_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_BenefitBalance';
   category : R5_CodeableConcept ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : R5_CodeableConcept ;
   unit : R5_CodeableConcept ;
   term : R5_CodeableConcept ;
   financial : R5_ExplanationOfBenefit_Financial [];
}
