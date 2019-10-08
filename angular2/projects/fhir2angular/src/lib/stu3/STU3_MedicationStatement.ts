import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Dosage } from './STU3_Dosage'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MedicationStatementStatusEnum } from './STU3_MedicationStatementStatusEnum'
import { STU3_MedicationStatementTakenEnum } from './STU3_MedicationStatementTakenEnum'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationStatement      extends STU3_DomainResource
{

   static def : string = 'MedicationStatement';
   identifier : STU3_Identifier [];
   basedOn : STU3_Reference [];
   partOf : STU3_Reference [];
   context : STU3_Reference ;
   status : STU3_MedicationStatementStatusEnum ;
   category : STU3_CodeableConcept ;
   medicationCodeableConcept : STU3_CodeableConcept ;
   medicationReference : STU3_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : STU3_Period ;
   dateAsserted : string ;
   informationSource : STU3_Reference ;
   subject : STU3_Reference ;
   derivedFrom : STU3_Reference [];
   taken : STU3_MedicationStatementTakenEnum ;
   reasonNotTaken : STU3_CodeableConcept [];
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   note : STU3_Annotation [];
   dosage : STU3_Dosage [];
}
