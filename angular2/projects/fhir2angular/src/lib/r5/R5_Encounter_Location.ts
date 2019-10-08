import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EncounterLocationStatusEnum } from './R5_EncounterLocationStatusEnum'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Encounter_Location      extends R5_BackboneElement
{

   static def : string = 'Encounter_Location';
   location : R5_Reference ;
   status : R5_EncounterLocationStatusEnum ;
   physicalType : R5_CodeableConcept ;
   period : R5_Period ;
}
