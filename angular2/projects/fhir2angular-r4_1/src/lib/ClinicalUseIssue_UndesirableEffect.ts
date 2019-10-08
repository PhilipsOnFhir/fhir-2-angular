import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ClinicalUseIssue_UndesirableEffect      extends BackboneElement
{

   static def : string = 'ClinicalUseIssue_UndesirableEffect';
   symptomConditionEffect : CodeableConcept ;
   classification : CodeableConcept ;
   frequencyOfOccurrence : CodeableConcept ;
}
