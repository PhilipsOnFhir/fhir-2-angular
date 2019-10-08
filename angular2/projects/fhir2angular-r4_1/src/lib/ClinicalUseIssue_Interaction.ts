import { BackboneElement } from './BackboneElement'
import { ClinicalUseIssue_Interactant } from './ClinicalUseIssue_Interactant'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ClinicalUseIssue_Interaction      extends BackboneElement
{

   static def : string = 'ClinicalUseIssue_Interaction';
   interactant : ClinicalUseIssue_Interactant [];
   type : CodeableConcept ;
   effect : CodeableConcept ;
   incidence : CodeableConcept ;
   management : CodeableConcept ;
}
