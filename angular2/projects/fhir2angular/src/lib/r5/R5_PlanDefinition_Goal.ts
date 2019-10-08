import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_PlanDefinition_Target } from './R5_PlanDefinition_Target'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'

export class R5_PlanDefinition_Goal      extends R5_BackboneElement
{

   static def : string = 'PlanDefinition_Goal';
   category : R5_CodeableConcept ;
   description : R5_CodeableConcept ;
   priority : R5_CodeableConcept ;
   start : R5_CodeableConcept ;
   addresses : R5_CodeableConcept [];
   documentation : R5_RelatedArtifact [];
   target : R5_PlanDefinition_Target [];
}
