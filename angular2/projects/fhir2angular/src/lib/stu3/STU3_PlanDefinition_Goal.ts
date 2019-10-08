import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_PlanDefinition_Target } from './STU3_PlanDefinition_Target'
import { STU3_RelatedArtifact } from './STU3_RelatedArtifact'

export class STU3_PlanDefinition_Goal      extends STU3_BackboneElement
{

   static def : string = 'PlanDefinition_Goal';
   category : STU3_CodeableConcept ;
   description : STU3_CodeableConcept ;
   priority : STU3_CodeableConcept ;
   start : STU3_CodeableConcept ;
   addresses : STU3_CodeableConcept [];
   documentation : STU3_RelatedArtifact [];
   target : STU3_PlanDefinition_Target [];
}
