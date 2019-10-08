import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Encounter_Hospitalization      extends DSTU2_BackboneElement
{

   static def : string = 'Encounter_Hospitalization';
   preAdmissionIdentifier : DSTU2_Identifier ;
   origin : DSTU2_Reference ;
   admitSource : DSTU2_CodeableConcept ;
   admittingDiagnosis : DSTU2_Reference [];
   reAdmission : DSTU2_CodeableConcept ;
   dietPreference : DSTU2_CodeableConcept [];
   specialCourtesy : DSTU2_CodeableConcept [];
   specialArrangement : DSTU2_CodeableConcept [];
   destination : DSTU2_Reference ;
   dischargeDisposition : DSTU2_CodeableConcept ;
   dischargeDiagnosis : DSTU2_Reference [];
}
