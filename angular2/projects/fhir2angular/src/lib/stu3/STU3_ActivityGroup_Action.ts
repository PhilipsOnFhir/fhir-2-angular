import { STU3_ActivityGroup_RelatedAction } from './STU3_ActivityGroup_RelatedAction'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Range } from './STU3_Range'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RelatedArtifact } from './STU3_RelatedArtifact'

export class STU3_ActivityGroup_Action      extends STU3_BackboneElement
{

   static def : string = 'ActivityGroup_Action';
   actionIdentifier : STU3_Identifier ;
   label : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   concept : STU3_CodeableConcept [];
   documentation : STU3_RelatedArtifact [];
   relatedAction : STU3_ActivityGroup_RelatedAction ;
   timingDateTime : string ;
   timingPeriod : STU3_Period ;
   timingDuration : string ;
   timingRange : STU3_Range ;
   participant : STU3_Reference [];
   type : STU3_Coding ;
   groupingBehavior : string ;
   selectionBehavior : string ;
   requiredBehavior : string ;
   precheckBehavior : string ;
   cardinalityBehavior : string ;
   resource : STU3_Reference ;
   action : STU3_ActivityGroup_Action [];
}
