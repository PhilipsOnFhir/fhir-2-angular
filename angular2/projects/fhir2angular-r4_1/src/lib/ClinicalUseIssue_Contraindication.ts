import { BackboneElement } from './BackboneElement'
import { ClinicalUseIssue_OtherTherapy } from './ClinicalUseIssue_OtherTherapy'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ClinicalUseIssue_Contraindication      extends BackboneElement
{

   static def : string = 'ClinicalUseIssue_Contraindication';
   diseaseSymptomProcedure : CodeableConcept ;
   diseaseStatus : CodeableConcept ;
   comorbidity : CodeableConcept [];
   indication : Reference [];
   otherTherapy : ClinicalUseIssue_OtherTherapy [];
}
