import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_DocumentReference_Context      extends R4_BackboneElement
{

   static def : string = 'DocumentReference_Context';
   encounter : R4_Reference [];
   event : R4_CodeableConcept [];
   period : R4_Period ;
   facilityType : R4_CodeableConcept ;
   practiceSetting : R4_CodeableConcept ;
   sourcePatientInfo : R4_Reference ;
   related : R4_Reference [];
}
