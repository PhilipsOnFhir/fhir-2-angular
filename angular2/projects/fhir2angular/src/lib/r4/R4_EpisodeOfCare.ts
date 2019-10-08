import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EpisodeOfCareStatusEnum } from './R4_EpisodeOfCareStatusEnum'
import { R4_EpisodeOfCare_Diagnosis } from './R4_EpisodeOfCare_Diagnosis'
import { R4_EpisodeOfCare_StatusHistory } from './R4_EpisodeOfCare_StatusHistory'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_EpisodeOfCare      extends R4_DomainResource
{

   static def : string = 'EpisodeOfCare';
   identifier : R4_Identifier [];
   status : R4_EpisodeOfCareStatusEnum ;
   statusHistory : R4_EpisodeOfCare_StatusHistory [];
   type : R4_CodeableConcept [];
   diagnosis : R4_EpisodeOfCare_Diagnosis [];
   patient : R4_Reference ;
   managingOrganization : R4_Reference ;
   period : R4_Period ;
   referralRequest : R4_Reference [];
   careManager : R4_Reference ;
   team : R4_Reference [];
   account : R4_Reference [];
}
