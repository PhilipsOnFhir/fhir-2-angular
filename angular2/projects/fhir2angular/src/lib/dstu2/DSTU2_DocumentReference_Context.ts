import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DocumentReference_Related } from './DSTU2_DocumentReference_Related'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DocumentReference_Context      extends DSTU2_BackboneElement
{

   static def : string = 'DocumentReference_Context';
   encounter : DSTU2_Reference ;
   event : DSTU2_CodeableConcept [];
   period : DSTU2_Period ;
   facilityType : DSTU2_CodeableConcept ;
   practiceSetting : DSTU2_CodeableConcept ;
   sourcePatientInfo : DSTU2_Reference ;
   related : DSTU2_DocumentReference_Related [];
}
