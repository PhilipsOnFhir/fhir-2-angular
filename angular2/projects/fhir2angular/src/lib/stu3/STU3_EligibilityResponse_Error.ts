import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_EligibilityResponse_Error      extends STU3_BackboneElement
{

   static def : string = 'EligibilityResponse_Error';
   code : STU3_CodeableConcept ;
}
