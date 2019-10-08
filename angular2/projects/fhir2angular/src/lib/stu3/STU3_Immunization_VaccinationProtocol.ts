import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Immunization_VaccinationProtocol      extends STU3_BackboneElement
{

   static def : string = 'Immunization_VaccinationProtocol';
   doseSequence : string ;
   description : string ;
   authority : STU3_Reference ;
   series : string ;
   seriesDoses : string ;
   targetDisease : STU3_CodeableConcept [];
   doseStatus : STU3_CodeableConcept ;
   doseStatusReason : STU3_CodeableConcept ;
}
