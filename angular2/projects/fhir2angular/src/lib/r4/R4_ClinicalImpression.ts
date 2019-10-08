import { R4_Annotation } from './R4_Annotation'
import { R4_ClinicalImpressionStatusEnum } from './R4_ClinicalImpressionStatusEnum'
import { R4_ClinicalImpression_Finding } from './R4_ClinicalImpression_Finding'
import { R4_ClinicalImpression_Investigation } from './R4_ClinicalImpression_Investigation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_ClinicalImpression      extends R4_DomainResource
{

   static def : string = 'ClinicalImpression';
   identifier : R4_Identifier [];
   status : R4_ClinicalImpressionStatusEnum ;
   statusReason : R4_CodeableConcept ;
   code : R4_CodeableConcept ;
   description : string ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R4_Period ;
   date : string ;
   assessor : R4_Reference ;
   previous : R4_Reference ;
   problem : R4_Reference [];
   investigation : R4_ClinicalImpression_Investigation [];
   protocol : string [];
   summary : string ;
   finding : R4_ClinicalImpression_Finding [];
   prognosisCodeableConcept : R4_CodeableConcept [];
   prognosisReference : R4_Reference [];
   supportingInfo : R4_Reference [];
   note : R4_Annotation [];
}
