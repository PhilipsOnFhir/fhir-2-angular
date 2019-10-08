import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_DocumentReference_Context      extends R5_BackboneElement
{

   static def : string = 'DocumentReference_Context';
   encounter : R5_Reference [];
   event : R5_CodeableConcept [];
   period : R5_Period ;
   facilityType : R5_CodeableConcept ;
   practiceSetting : R5_CodeableConcept ;
   sourcePatientInfo : R5_Reference ;
   related : R5_Reference [];
}
