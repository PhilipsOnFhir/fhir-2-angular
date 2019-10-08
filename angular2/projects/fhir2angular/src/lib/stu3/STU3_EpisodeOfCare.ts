import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EpisodeOfCareStatusEnum } from './STU3_EpisodeOfCareStatusEnum'
import { STU3_EpisodeOfCare_Diagnosis } from './STU3_EpisodeOfCare_Diagnosis'
import { STU3_EpisodeOfCare_StatusHistory } from './STU3_EpisodeOfCare_StatusHistory'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_EpisodeOfCare      extends STU3_DomainResource
{

   static def : string = 'EpisodeOfCare';
   identifier : STU3_Identifier [];
   status : STU3_EpisodeOfCareStatusEnum ;
   statusHistory : STU3_EpisodeOfCare_StatusHistory [];
   type : STU3_CodeableConcept [];
   diagnosis : STU3_EpisodeOfCare_Diagnosis [];
   patient : STU3_Reference ;
   managingOrganization : STU3_Reference ;
   period : STU3_Period ;
   referralRequest : STU3_Reference [];
   careManager : STU3_Reference ;
   team : STU3_Reference [];
   account : STU3_Reference [];
}
