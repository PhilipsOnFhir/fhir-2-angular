import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_EncounterStateEnum } from './DSTU2_EncounterStateEnum'
import { DSTU2_Period } from './DSTU2_Period'

export class DSTU2_Encounter_StatusHistory      extends DSTU2_BackboneElement
{

   static def : string = 'Encounter_StatusHistory';
   status : DSTU2_EncounterStateEnum ;
   period : DSTU2_Period ;
}
