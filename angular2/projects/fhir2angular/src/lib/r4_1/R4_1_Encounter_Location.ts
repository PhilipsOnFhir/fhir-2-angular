import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EncounterLocationStatusEnum } from './R4_1_EncounterLocationStatusEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Encounter_Location      extends R4_1_BackboneElement
{

   static def : string = 'Encounter_Location';
   location : R4_1_Reference ;
   status : R4_1_EncounterLocationStatusEnum ;
   physicalType : R4_1_CodeableConcept ;
   period : R4_1_Period ;
}
