import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EncounterStatusEnum } from './STU3_EncounterStatusEnum'
import { STU3_Period } from './STU3_Period'

export class STU3_Encounter_StatusHistory      extends STU3_BackboneElement
{

   static def : string = 'Encounter_StatusHistory';
   status : STU3_EncounterStatusEnum ;
   period : STU3_Period ;
}
