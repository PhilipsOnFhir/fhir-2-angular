import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EligibilityResponse_Financial } from './STU3_EligibilityResponse_Financial'

export class STU3_EligibilityResponse_BenefitBalance      extends STU3_BackboneElement
{

   static def : string = 'EligibilityResponse_BenefitBalance';
   category : STU3_CodeableConcept ;
   subCategory : STU3_CodeableConcept ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : STU3_CodeableConcept ;
   unit : STU3_CodeableConcept ;
   term : STU3_CodeableConcept ;
   financial : STU3_EligibilityResponse_Financial [];
}
