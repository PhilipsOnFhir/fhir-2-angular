import { Annotation } from './Annotation'
import { ClinicalImpression_Finding } from './ClinicalImpression_Finding'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EventStatusEnum } from './EventStatusEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class ClinicalImpression      extends DomainResource
{

   static def : string = 'ClinicalImpression';
   identifier : Identifier [];
   status : EventStatusEnum ;
   statusReason : CodeableConcept ;
   description : string ;
   subject : Reference ;
   encounter : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   date : string ;
   performer : Reference ;
   previous : Reference ;
   problem : Reference [];
   protocol : string [];
   summary : string ;
   finding : ClinicalImpression_Finding [];
   prognosisCodeableConcept : CodeableConcept [];
   prognosisReference : Reference [];
   supportingInfo : Reference [];
   note : Annotation [];
}
