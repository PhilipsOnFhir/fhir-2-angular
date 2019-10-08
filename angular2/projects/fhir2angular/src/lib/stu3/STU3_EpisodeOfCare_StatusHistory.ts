import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EpisodeOfCareStatusEnum } from './STU3_EpisodeOfCareStatusEnum'
import { STU3_Period } from './STU3_Period'

export class STU3_EpisodeOfCare_StatusHistory      extends STU3_BackboneElement
{

   static def : string = 'EpisodeOfCare_StatusHistory';
   status : STU3_EpisodeOfCareStatusEnum ;
   period : STU3_Period ;
}
