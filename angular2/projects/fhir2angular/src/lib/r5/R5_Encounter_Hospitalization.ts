import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Encounter_Hospitalization      extends R5_BackboneElement
{

   static def : string = 'Encounter_Hospitalization';
   preAdmissionIdentifier : R5_Identifier ;
   origin : R5_Reference ;
   admitSource : R5_CodeableConcept ;
   reAdmission : R5_CodeableConcept ;
   dietPreference : R5_CodeableConcept [];
   specialCourtesy : R5_CodeableConcept [];
   specialArrangement : R5_CodeableConcept [];
   destination : R5_Reference ;
   dischargeDisposition : R5_CodeableConcept ;
}
