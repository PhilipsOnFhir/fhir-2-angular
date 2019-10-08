import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_CoverageEligibilityResponse_Benefit } from './R5_CoverageEligibilityResponse_Benefit'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_CoverageEligibilityResponse_Item      extends R5_BackboneElement
{

   static def : string = 'CoverageEligibilityResponse_Item';
   category : R5_CodeableConcept ;
   productOrService : R5_CodeableConcept ;
   modifier : R5_CodeableConcept [];
   provider : R5_Reference ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : R5_CodeableConcept ;
   unit : R5_CodeableConcept ;
   term : R5_CodeableConcept ;
   benefit : R5_CoverageEligibilityResponse_Benefit [];
   authorizationRequired : boolean ;
   authorizationSupporting : R5_CodeableConcept [];
   authorizationUrl : string ;
}
