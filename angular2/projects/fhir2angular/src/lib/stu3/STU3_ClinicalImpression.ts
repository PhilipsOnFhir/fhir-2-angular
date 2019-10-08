import { STU3_Annotation } from './STU3_Annotation'
import { STU3_ClinicalImpressionStatusEnum } from './STU3_ClinicalImpressionStatusEnum'
import { STU3_ClinicalImpression_Finding } from './STU3_ClinicalImpression_Finding'
import { STU3_ClinicalImpression_Investigation } from './STU3_ClinicalImpression_Investigation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ClinicalImpression      extends STU3_DomainResource
{

   static def : string = 'ClinicalImpression';
   identifier : STU3_Identifier [];
   status : STU3_ClinicalImpressionStatusEnum ;
   code : STU3_CodeableConcept ;
   description : string ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   effectiveDateTime : string ;
   effectivePeriod : STU3_Period ;
   date : string ;
   assessor : STU3_Reference ;
   previous : STU3_Reference ;
   problem : STU3_Reference [];
   investigation : STU3_ClinicalImpression_Investigation [];
   protocol : string [];
   summary : string ;
   finding : STU3_ClinicalImpression_Finding [];
   prognosisCodeableConcept : STU3_CodeableConcept [];
   prognosisReference : STU3_Reference [];
   action : STU3_Reference [];
   note : STU3_Annotation [];
}
