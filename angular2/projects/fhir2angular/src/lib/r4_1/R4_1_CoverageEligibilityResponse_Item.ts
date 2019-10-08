import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_CoverageEligibilityResponse_Benefit } from './R4_1_CoverageEligibilityResponse_Benefit'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CoverageEligibilityResponse_Item      extends R4_1_BackboneElement
{

   static def : string = 'CoverageEligibilityResponse_Item';
   category : R4_1_CodeableConcept ;
   productOrService : R4_1_CodeableConcept ;
   modifier : R4_1_CodeableConcept [];
   provider : R4_1_Reference ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : R4_1_CodeableConcept ;
   unit : R4_1_CodeableConcept ;
   term : R4_1_CodeableConcept ;
   benefit : R4_1_CoverageEligibilityResponse_Benefit [];
   authorizationRequired : boolean ;
   authorizationSupporting : R4_1_CodeableConcept [];
   authorizationUrl : string ;
}
