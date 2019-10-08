import { BackboneElement } from './BackboneElement'
import { ClinicalUseIssue_OtherTherapy } from './ClinicalUseIssue_OtherTherapy'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class ClinicalUseIssue_Indication      extends BackboneElement
{

   static def : string = 'ClinicalUseIssue_Indication';
   diseaseSymptomProcedure : CodeableConcept ;
   diseaseStatus : CodeableConcept ;
   comorbidity : CodeableConcept [];
   intendedEffect : CodeableConcept ;
   duration : Quantity ;
   undesirableEffect : Reference [];
   otherTherapy : ClinicalUseIssue_OtherTherapy [];
}
