import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_ClinicalImpressionStatusEnum } from './R4_1_ClinicalImpressionStatusEnum'
import { R4_1_ClinicalImpression_Finding } from './R4_1_ClinicalImpression_Finding'
import { R4_1_ClinicalImpression_Investigation } from './R4_1_ClinicalImpression_Investigation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ClinicalImpression      extends R4_1_DomainResource
{

   static def : string = 'ClinicalImpression';
   identifier : R4_1_Identifier [];
   status : R4_1_ClinicalImpressionStatusEnum ;
   statusReason : R4_1_CodeableConcept ;
   code : R4_1_CodeableConcept ;
   description : string ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R4_1_Period ;
   date : string ;
   assessor : R4_1_Reference ;
   previous : R4_1_Reference ;
   problem : R4_1_Reference [];
   investigation : R4_1_ClinicalImpression_Investigation [];
   protocol : string [];
   summary : string ;
   finding : R4_1_ClinicalImpression_Finding [];
   prognosisCodeableConcept : R4_1_CodeableConcept [];
   prognosisReference : R4_1_Reference [];
   supportingInfo : R4_1_Reference [];
   note : R4_1_Annotation [];
}
