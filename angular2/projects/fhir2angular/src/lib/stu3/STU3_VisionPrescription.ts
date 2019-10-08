import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'
import { STU3_VisionPrescription_Dispense } from './STU3_VisionPrescription_Dispense'

export class STU3_VisionPrescription      extends STU3_DomainResource
{

   static def : string = 'VisionPrescription';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   patient : STU3_Reference ;
   encounter : STU3_Reference ;
   dateWritten : string ;
   prescriber : STU3_Reference ;
   reasonCodeableConcept : STU3_CodeableConcept ;
   reasonReference : STU3_Reference ;
   dispense : STU3_VisionPrescription_Dispense [];
}
