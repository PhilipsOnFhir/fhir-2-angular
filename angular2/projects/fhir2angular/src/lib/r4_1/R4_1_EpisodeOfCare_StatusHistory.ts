import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EpisodeOfCareStatusEnum } from './R4_1_EpisodeOfCareStatusEnum'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_EpisodeOfCare_StatusHistory      extends R4_1_BackboneElement
{

   static def : string = 'EpisodeOfCare_StatusHistory';
   status : R4_1_EpisodeOfCareStatusEnum ;
   period : R4_1_Period ;
}
