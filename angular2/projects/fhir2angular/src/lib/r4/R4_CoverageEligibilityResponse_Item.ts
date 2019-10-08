import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_CoverageEligibilityResponse_Benefit } from './R4_CoverageEligibilityResponse_Benefit'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_CoverageEligibilityResponse_Item      extends R4_BackboneElement
{

   static def : string = 'CoverageEligibilityResponse_Item';
   category : R4_CodeableConcept ;
   productOrService : R4_CodeableConcept ;
   modifier : R4_CodeableConcept [];
   provider : R4_Reference ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : R4_CodeableConcept ;
   unit : R4_CodeableConcept ;
   term : R4_CodeableConcept ;
   benefit : R4_CoverageEligibilityResponse_Benefit [];
   authorizationRequired : boolean ;
   authorizationSupporting : R4_CodeableConcept [];
   authorizationUrl : string ;
}
