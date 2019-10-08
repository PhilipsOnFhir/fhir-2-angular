import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EpisodeOfCareStatusEnum } from './R4_1_EpisodeOfCareStatusEnum'
import { R4_1_EpisodeOfCare_Diagnosis } from './R4_1_EpisodeOfCare_Diagnosis'
import { R4_1_EpisodeOfCare_StatusHistory } from './R4_1_EpisodeOfCare_StatusHistory'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_EpisodeOfCare      extends R4_1_DomainResource
{

   static def : string = 'EpisodeOfCare';
   identifier : R4_1_Identifier [];
   status : R4_1_EpisodeOfCareStatusEnum ;
   statusHistory : R4_1_EpisodeOfCare_StatusHistory [];
   type : R4_1_CodeableConcept [];
   diagnosis : R4_1_EpisodeOfCare_Diagnosis [];
   patient : R4_1_Reference ;
   managingOrganization : R4_1_Reference ;
   period : R4_1_Period ;
   referralRequest : R4_1_Reference [];
   careManager : R4_1_Reference ;
   team : R4_1_Reference [];
   account : R4_1_Reference [];
}
