import { R4_Annotation } from './R4_Annotation'
import { R4_CareTeamStatusEnum } from './R4_CareTeamStatusEnum'
import { R4_CareTeam_Participant } from './R4_CareTeam_Participant'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_CareTeam      extends R4_DomainResource
{

   static def : string = 'CareTeam';
   identifier : R4_Identifier [];
   status : R4_CareTeamStatusEnum ;
   category : R4_CodeableConcept [];
   name : string ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   period : R4_Period ;
   participant : R4_CareTeam_Participant [];
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   managingOrganization : R4_Reference [];
   telecom : R4_ContactPoint [];
   note : R4_Annotation [];
}
