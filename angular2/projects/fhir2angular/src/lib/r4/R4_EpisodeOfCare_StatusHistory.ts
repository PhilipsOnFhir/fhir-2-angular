import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EpisodeOfCareStatusEnum } from './R4_EpisodeOfCareStatusEnum'
import { R4_Period } from './R4_Period'

export class R4_EpisodeOfCare_StatusHistory      extends R4_BackboneElement
{

   static def : string = 'EpisodeOfCare_StatusHistory';
   status : R4_EpisodeOfCareStatusEnum ;
   period : R4_Period ;
}
