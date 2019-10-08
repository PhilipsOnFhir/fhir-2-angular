import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_MedicationStatementStatusEnum } from './DSTU2_MedicationStatementStatusEnum'
import { DSTU2_MedicationStatement_Dosage } from './DSTU2_MedicationStatement_Dosage'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_MedicationStatement      extends DSTU2_DomainResource
{

   static def : string = 'MedicationStatement';
   identifier : DSTU2_Identifier [];
   patient : DSTU2_Reference ;
   informationSource : DSTU2_Reference ;
   dateAsserted : string ;
   status : DSTU2_MedicationStatementStatusEnum ;
   wasNotTaken : boolean ;
   reasonNotTaken : DSTU2_CodeableConcept [];
   reasonForUseCodeableConcept : DSTU2_CodeableConcept ;
   reasonForUseReference : DSTU2_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : DSTU2_Period ;
   note : string ;
   supportingInformation : DSTU2_Reference [];
   medicationCodeableConcept : DSTU2_CodeableConcept ;
   medicationReference : DSTU2_Reference ;
   dosage : DSTU2_MedicationStatement_Dosage [];
}
