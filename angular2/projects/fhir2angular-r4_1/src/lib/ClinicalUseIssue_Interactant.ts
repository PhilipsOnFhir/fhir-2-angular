import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ClinicalUseIssue_Interactant      extends BackboneElement
{

   static def : string = 'ClinicalUseIssue_Interactant';
   itemReference : Reference ;
   itemCodeableConcept : CodeableConcept ;
}
