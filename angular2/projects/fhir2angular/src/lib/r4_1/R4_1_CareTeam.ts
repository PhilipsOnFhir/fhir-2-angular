import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CareTeamStatusEnum } from './R4_1_CareTeamStatusEnum'
import { R4_1_CareTeam_Participant } from './R4_1_CareTeam_Participant'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CareTeam      extends R4_1_DomainResource
{

   static def : string = 'CareTeam';
   identifier : R4_1_Identifier [];
   status : R4_1_CareTeamStatusEnum ;
   category : R4_1_CodeableConcept [];
   name : string ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   period : R4_1_Period ;
   participant : R4_1_CareTeam_Participant [];
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   managingOrganization : R4_1_Reference [];
   telecom : R4_1_ContactPoint [];
   note : R4_1_Annotation [];
}
