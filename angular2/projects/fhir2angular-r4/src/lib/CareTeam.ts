import { Annotation } from './Annotation'
import { CareTeamStatusEnum } from './CareTeamStatusEnum'
import { CareTeam_Participant } from './CareTeam_Participant'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class CareTeam      extends DomainResource
{

   static def : string = 'CareTeam';
   identifier : Identifier [];
   status : CareTeamStatusEnum ;
   category : CodeableConcept [];
   name : string ;
   subject : Reference ;
   encounter : Reference ;
   period : Period ;
   participant : CareTeam_Participant [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   managingOrganization : Reference [];
   telecom : ContactPoint [];
   note : Annotation [];
}
