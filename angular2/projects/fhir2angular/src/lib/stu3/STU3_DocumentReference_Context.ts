import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DocumentReference_Related } from './STU3_DocumentReference_Related'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DocumentReference_Context      extends STU3_BackboneElement
{

   static def : string = 'DocumentReference_Context';
   encounter : STU3_Reference ;
   event : STU3_CodeableConcept [];
   period : STU3_Period ;
   facilityType : STU3_CodeableConcept ;
   practiceSetting : STU3_CodeableConcept ;
   sourcePatientInfo : STU3_Reference ;
   related : STU3_DocumentReference_Related [];
}
