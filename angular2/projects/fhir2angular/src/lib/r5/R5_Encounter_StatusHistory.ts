import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EncounterStatusEnum } from './R5_EncounterStatusEnum'
import { R5_Period } from './R5_Period'

export class R5_Encounter_StatusHistory      extends R5_BackboneElement
{

   static def : string = 'Encounter_StatusHistory';
   status : R5_EncounterStatusEnum ;
   period : R5_Period ;
}
