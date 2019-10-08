import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DocumentReference_Context      extends R4_1_BackboneElement
{

   static def : string = 'DocumentReference_Context';
   encounter : R4_1_Reference [];
   event : R4_1_CodeableConcept [];
   period : R4_1_Period ;
   facilityType : R4_1_CodeableConcept ;
   practiceSetting : R4_1_CodeableConcept ;
   sourcePatientInfo : R4_1_Reference ;
   related : R4_1_Reference [];
}
