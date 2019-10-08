import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EpisodeOfCareStatusEnum } from './R5_EpisodeOfCareStatusEnum'
import { R5_Period } from './R5_Period'

export class R5_EpisodeOfCare_StatusHistory      extends R5_BackboneElement
{

   static def : string = 'EpisodeOfCare_StatusHistory';
   status : R5_EpisodeOfCareStatusEnum ;
   period : R5_Period ;
}
