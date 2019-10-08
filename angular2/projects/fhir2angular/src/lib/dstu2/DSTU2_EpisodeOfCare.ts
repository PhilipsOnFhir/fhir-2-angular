import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_EpisodeOfCareStatusEnum } from './DSTU2_EpisodeOfCareStatusEnum'
import { DSTU2_EpisodeOfCare_CareTeam } from './DSTU2_EpisodeOfCare_CareTeam'
import { DSTU2_EpisodeOfCare_StatusHistory } from './DSTU2_EpisodeOfCare_StatusHistory'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_EpisodeOfCare      extends DSTU2_DomainResource
{

   static def : string = 'EpisodeOfCare';
   identifier : DSTU2_Identifier [];
   status : DSTU2_EpisodeOfCareStatusEnum ;
   statusHistory : DSTU2_EpisodeOfCare_StatusHistory [];
   type : DSTU2_CodeableConcept [];
   condition : DSTU2_Reference [];
   patient : DSTU2_Reference ;
   managingOrganization : DSTU2_Reference ;
   period : DSTU2_Period ;
   referralRequest : DSTU2_Reference [];
   careManager : DSTU2_Reference ;
   careTeam : DSTU2_EpisodeOfCare_CareTeam [];
}
