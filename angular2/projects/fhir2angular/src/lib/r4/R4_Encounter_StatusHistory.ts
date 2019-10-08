import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EncounterStatusEnum } from './R4_EncounterStatusEnum'
import { R4_Period } from './R4_Period'

export class R4_Encounter_StatusHistory      extends R4_BackboneElement
{

   static def : string = 'Encounter_StatusHistory';
   status : R4_EncounterStatusEnum ;
   period : R4_Period ;
}
