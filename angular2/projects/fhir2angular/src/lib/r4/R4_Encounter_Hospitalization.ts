import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Encounter_Hospitalization      extends R4_BackboneElement
{

   static def : string = 'Encounter_Hospitalization';
   preAdmissionIdentifier : R4_Identifier ;
   origin : R4_Reference ;
   admitSource : R4_CodeableConcept ;
   reAdmission : R4_CodeableConcept ;
   dietPreference : R4_CodeableConcept [];
   specialCourtesy : R4_CodeableConcept [];
   specialArrangement : R4_CodeableConcept [];
   destination : R4_Reference ;
   dischargeDisposition : R4_CodeableConcept ;
}
