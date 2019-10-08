import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_EncounterLocationStatusEnum } from './DSTU2_EncounterLocationStatusEnum'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Encounter_Location      extends DSTU2_BackboneElement
{

   static def : string = 'Encounter_Location';
   location : DSTU2_Reference ;
   status : DSTU2_EncounterLocationStatusEnum ;
   period : DSTU2_Period ;
}
