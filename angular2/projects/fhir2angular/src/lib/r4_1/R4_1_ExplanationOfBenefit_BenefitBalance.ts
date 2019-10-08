import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExplanationOfBenefit_Financial } from './R4_1_ExplanationOfBenefit_Financial'

export class R4_1_ExplanationOfBenefit_BenefitBalance      extends R4_1_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_BenefitBalance';
   category : R4_1_CodeableConcept ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : R4_1_CodeableConcept ;
   unit : R4_1_CodeableConcept ;
   term : R4_1_CodeableConcept ;
   financial : R4_1_ExplanationOfBenefit_Financial [];
}
