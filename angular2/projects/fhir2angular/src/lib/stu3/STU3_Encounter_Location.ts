import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EncounterLocationStatusEnum } from './STU3_EncounterLocationStatusEnum'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Encounter_Location      extends STU3_BackboneElement
{

   static def : string = 'Encounter_Location';
   location : STU3_Reference ;
   status : STU3_EncounterLocationStatusEnum ;
   period : STU3_Period ;
}
