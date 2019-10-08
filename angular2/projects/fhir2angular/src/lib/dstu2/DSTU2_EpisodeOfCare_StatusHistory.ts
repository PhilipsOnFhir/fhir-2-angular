import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_EpisodeOfCareStatusEnum } from './DSTU2_EpisodeOfCareStatusEnum'
import { DSTU2_Period } from './DSTU2_Period'

export class DSTU2_EpisodeOfCare_StatusHistory      extends DSTU2_BackboneElement
{

   static def : string = 'EpisodeOfCare_StatusHistory';
   status : DSTU2_EpisodeOfCareStatusEnum ;
   period : DSTU2_Period ;
}
