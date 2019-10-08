import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_HealthcareService_ServiceType      extends DSTU2_BackboneElement
{

   static def : string = 'HealthcareService_ServiceType';
   type : DSTU2_CodeableConcept ;
   specialty : DSTU2_CodeableConcept [];
}
