import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EpisodeOfCareStatusEnum } from './R5_EpisodeOfCareStatusEnum'
import { R5_EpisodeOfCare_Diagnosis } from './R5_EpisodeOfCare_Diagnosis'
import { R5_EpisodeOfCare_StatusHistory } from './R5_EpisodeOfCare_StatusHistory'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_EpisodeOfCare      extends R5_DomainResource
{

   static def : string = 'EpisodeOfCare';
   identifier : R5_Identifier [];
   status : R5_EpisodeOfCareStatusEnum ;
   statusHistory : R5_EpisodeOfCare_StatusHistory [];
   type : R5_CodeableConcept [];
   diagnosis : R5_EpisodeOfCare_Diagnosis [];
   patient : R5_Reference ;
   managingOrganization : R5_Reference ;
   period : R5_Period ;
   referralRequest : R5_Reference [];
   careManager : R5_Reference ;
   team : R5_Reference [];
   account : R5_Reference [];
}
