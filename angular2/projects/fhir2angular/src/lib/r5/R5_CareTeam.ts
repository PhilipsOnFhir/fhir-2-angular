import { R5_Annotation } from './R5_Annotation'
import { R5_CareTeamStatusEnum } from './R5_CareTeamStatusEnum'
import { R5_CareTeam_Participant } from './R5_CareTeam_Participant'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_CareTeam      extends R5_DomainResource
{

   static def : string = 'CareTeam';
   identifier : R5_Identifier [];
   status : R5_CareTeamStatusEnum ;
   category : R5_CodeableConcept [];
   name : string ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   period : R5_Period ;
   participant : R5_CareTeam_Participant [];
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   managingOrganization : R5_Reference [];
   telecom : R5_ContactPoint [];
   note : R5_Annotation [];
}
