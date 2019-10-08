import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EncounterStatusEnum } from './R4_1_EncounterStatusEnum'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_Encounter_StatusHistory      extends R4_1_BackboneElement
{

   static def : string = 'Encounter_StatusHistory';
   status : R4_1_EncounterStatusEnum ;
   period : R4_1_Period ;
}
