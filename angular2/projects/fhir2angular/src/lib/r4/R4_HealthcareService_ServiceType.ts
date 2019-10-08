import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_HealthcareService_ServiceType      extends R4_BackboneElement
{

   static def : string = 'HealthcareService_ServiceType';
   type : R4_CodeableConcept ;
   specialty : R4_CodeableConcept [];
}
