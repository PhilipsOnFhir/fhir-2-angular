import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_HealthcareService_Eligibility      extends R5_BackboneElement
{

   static def : string = 'HealthcareService_Eligibility';
   code : R5_CodeableConcept ;
   comment : string ;
}
