import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Encounter_Hospitalization      extends STU3_BackboneElement
{

   static def : string = 'Encounter_Hospitalization';
   preAdmissionIdentifier : STU3_Identifier ;
   origin : STU3_Reference ;
   admitSource : STU3_CodeableConcept ;
   reAdmission : STU3_CodeableConcept ;
   dietPreference : STU3_CodeableConcept [];
   specialCourtesy : STU3_CodeableConcept [];
   specialArrangement : STU3_CodeableConcept [];
   destination : STU3_Reference ;
   dischargeDisposition : STU3_CodeableConcept ;
}
