import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_PlanDefinition_Target } from './R4_1_PlanDefinition_Target'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'

export class R4_1_PlanDefinition_Goal      extends R4_1_BackboneElement
{

   static def : string = 'PlanDefinition_Goal';
   category : R4_1_CodeableConcept ;
   description : R4_1_CodeableConcept ;
   priority : R4_1_CodeableConcept ;
   start : R4_1_CodeableConcept ;
   addresses : R4_1_CodeableConcept [];
   documentation : R4_1_RelatedArtifact [];
   target : R4_1_PlanDefinition_Target [];
}
