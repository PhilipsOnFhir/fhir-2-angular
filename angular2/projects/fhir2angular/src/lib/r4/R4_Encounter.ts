import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EncounterStatusEnum } from './R4_EncounterStatusEnum'
import { R4_Encounter_ClassHistory } from './R4_Encounter_ClassHistory'
import { R4_Encounter_Diagnosis } from './R4_Encounter_Diagnosis'
import { R4_Encounter_Hospitalization } from './R4_Encounter_Hospitalization'
import { R4_Encounter_Location } from './R4_Encounter_Location'
import { R4_Encounter_Participant } from './R4_Encounter_Participant'
import { R4_Encounter_StatusHistory } from './R4_Encounter_StatusHistory'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Encounter      extends R4_DomainResource
{

   static def : string = 'Encounter';
   identifier : R4_Identifier [];
   status : R4_EncounterStatusEnum ;
   statusHistory : R4_Encounter_StatusHistory [];
   class : R4_Coding ;
   classHistory : R4_Encounter_ClassHistory [];
   type : R4_CodeableConcept [];
   serviceType : R4_CodeableConcept ;
   priority : R4_CodeableConcept ;
   subject : R4_Reference ;
   episodeOfCare : R4_Reference [];
   basedOn : R4_Reference [];
   participant : R4_Encounter_Participant [];
   appointment : R4_Reference [];
   period : R4_Period ;
   length : string ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   diagnosis : R4_Encounter_Diagnosis [];
   account : R4_Reference [];
   hospitalization : R4_Encounter_Hospitalization ;
   location : R4_Encounter_Location [];
   serviceProvider : R4_Reference ;
   partOf : R4_Reference ;
}
