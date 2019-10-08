import { R5_Annotation } from './R5_Annotation'
import { R5_ClinicalImpressionStatusEnum } from './R5_ClinicalImpressionStatusEnum'
import { R5_ClinicalImpression_Finding } from './R5_ClinicalImpression_Finding'
import { R5_ClinicalImpression_Investigation } from './R5_ClinicalImpression_Investigation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_ClinicalImpression      extends R5_DomainResource
{

   static def : string = 'ClinicalImpression';
   identifier : R5_Identifier [];
   status : R5_ClinicalImpressionStatusEnum ;
   statusReason : R5_CodeableConcept ;
   code : R5_CodeableConcept ;
   description : string ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : R5_Period ;
   date : string ;
   assessor : R5_Reference ;
   previous : R5_Reference ;
   problem : R5_Reference [];
   investigation : R5_ClinicalImpression_Investigation [];
   protocol : string [];
   summary : string ;
   finding : R5_ClinicalImpression_Finding [];
   prognosisCodeableConcept : R5_CodeableConcept [];
   prognosisReference : R5_Reference [];
   supportingInfo : R5_Reference [];
   note : R5_Annotation [];
}
