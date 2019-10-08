import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Immunization_VaccinationProtocol      extends DSTU2_BackboneElement
{

   static def : string = 'Immunization_VaccinationProtocol';
   doseSequence : string ;
   description : string ;
   authority : DSTU2_Reference ;
   series : string ;
   seriesDoses : string ;
   targetDisease : DSTU2_CodeableConcept [];
   doseStatus : DSTU2_CodeableConcept ;
   doseStatusReason : DSTU2_CodeableConcept ;
}
