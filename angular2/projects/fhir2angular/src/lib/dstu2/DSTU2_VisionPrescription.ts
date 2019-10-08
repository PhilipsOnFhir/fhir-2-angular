import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_VisionPrescription_Dispense } from './DSTU2_VisionPrescription_Dispense'

export class DSTU2_VisionPrescription      extends DSTU2_DomainResource
{

   static def : string = 'VisionPrescription';
   identifier : DSTU2_Identifier [];
   dateWritten : string ;
   patient : DSTU2_Reference ;
   prescriber : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   reasonCodeableConcept : DSTU2_CodeableConcept ;
   reasonReference : DSTU2_Reference ;
   dispense : DSTU2_VisionPrescription_Dispense [];
}
