import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Immunization_VaccinationProtocol      extends R4_BackboneElement
{

   static def : string = 'Immunization_VaccinationProtocol';
   doseSequence : string ;
   description : string ;
   authority : R4_Reference ;
   series : string ;
   seriesDoses : string ;
   targetDisease : R4_CodeableConcept [];
   doseStatus : R4_CodeableConcept ;
   doseStatusReason : R4_CodeableConcept ;
}
