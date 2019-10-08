import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EncounterLocationStatusEnum } from './R4_EncounterLocationStatusEnum'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Encounter_Location      extends R4_BackboneElement
{

   static def : string = 'Encounter_Location';
   location : R4_Reference ;
   status : R4_EncounterLocationStatusEnum ;
   physicalType : R4_CodeableConcept ;
   period : R4_Period ;
}
