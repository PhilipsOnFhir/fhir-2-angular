import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_PlanDefinition_Target } from './R4_PlanDefinition_Target'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'

export class R4_PlanDefinition_Goal      extends R4_BackboneElement
{

   static def : string = 'PlanDefinition_Goal';
   category : R4_CodeableConcept ;
   description : R4_CodeableConcept ;
   priority : R4_CodeableConcept ;
   start : R4_CodeableConcept ;
   addresses : R4_CodeableConcept [];
   documentation : R4_RelatedArtifact [];
   target : R4_PlanDefinition_Target [];
}
