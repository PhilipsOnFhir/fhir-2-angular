import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExplanationOfBenefit_Financial } from './R4_ExplanationOfBenefit_Financial'

export class R4_ExplanationOfBenefit_BenefitBalance      extends R4_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_BenefitBalance';
   category : R4_CodeableConcept ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : R4_CodeableConcept ;
   unit : R4_CodeableConcept ;
   term : R4_CodeableConcept ;
   financial : R4_ExplanationOfBenefit_Financial [];
}
