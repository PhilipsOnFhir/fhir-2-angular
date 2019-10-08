import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CareTeamStatusEnum } from './STU3_CareTeamStatusEnum'
import { STU3_CareTeam_Participant } from './STU3_CareTeam_Participant'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_CareTeam      extends STU3_DomainResource
{

   static def : string = 'CareTeam';
   identifier : STU3_Identifier [];
   status : STU3_CareTeamStatusEnum ;
   category : STU3_CodeableConcept [];
   name : string ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   period : STU3_Period ;
   participant : STU3_CareTeam_Participant [];
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   managingOrganization : STU3_Reference [];
   note : STU3_Annotation [];
}
