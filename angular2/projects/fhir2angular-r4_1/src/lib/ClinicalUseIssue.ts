import { ClinicalUseIssueTypeEnum } from './ClinicalUseIssueTypeEnum'
import { ClinicalUseIssue_Contraindication } from './ClinicalUseIssue_Contraindication'
import { ClinicalUseIssue_Indication } from './ClinicalUseIssue_Indication'
import { ClinicalUseIssue_Interaction } from './ClinicalUseIssue_Interaction'
import { ClinicalUseIssue_UndesirableEffect } from './ClinicalUseIssue_UndesirableEffect'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Population } from './Population'
import { Reference } from './Reference'

export class ClinicalUseIssue      extends DomainResource
{

   static def : string = 'ClinicalUseIssue';
   identifier : Identifier [];
   type : ClinicalUseIssueTypeEnum ;
   subject : Reference [];
   status : CodeableConcept ;
   description : string ;
   contraindication : ClinicalUseIssue_Contraindication ;
   indication : ClinicalUseIssue_Indication ;
   interaction : ClinicalUseIssue_Interaction ;
   population : Population [];
   undesirableEffect : ClinicalUseIssue_UndesirableEffect ;
}
