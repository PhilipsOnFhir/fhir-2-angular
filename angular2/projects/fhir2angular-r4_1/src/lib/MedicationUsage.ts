import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'
import { Identifier } from './Identifier'
import { MedicationUsageStatusCodesEnum } from './MedicationUsageStatusCodesEnum'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicationUsage      extends DomainResource
{

   static def : string = 'MedicationUsage';
   identifier : Identifier [];
   basedOn : Reference [];
   partOf : Reference [];
   status : MedicationUsageStatusCodesEnum ;
   statusReason : CodeableConcept [];
   category : CodeableConcept [];
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   subject : Reference ;
   encounter : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   dateAsserted : string ;
   informationSource : Reference ;
   derivedFrom : Reference [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   dosage : Dosage [];
   takenAsOrdered : boolean ;
}
