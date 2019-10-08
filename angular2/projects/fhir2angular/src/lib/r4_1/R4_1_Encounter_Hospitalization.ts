import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Encounter_Hospitalization      extends R4_1_BackboneElement
{

   static def : string = 'Encounter_Hospitalization';
   preAdmissionIdentifier : R4_1_Identifier ;
   origin : R4_1_Reference ;
   admitSource : R4_1_CodeableConcept ;
   reAdmission : R4_1_CodeableConcept ;
   dietPreference : R4_1_CodeableConcept [];
   specialCourtesy : R4_1_CodeableConcept [];
   specialArrangement : R4_1_CodeableConcept [];
   destination : R4_1_Reference ;
   dischargeDisposition : R4_1_CodeableConcept ;
}
