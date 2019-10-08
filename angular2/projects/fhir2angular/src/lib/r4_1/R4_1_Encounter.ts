import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EncounterStatusEnum } from './R4_1_EncounterStatusEnum'
import { R4_1_Encounter_ClassHistory } from './R4_1_Encounter_ClassHistory'
import { R4_1_Encounter_Diagnosis } from './R4_1_Encounter_Diagnosis'
import { R4_1_Encounter_Hospitalization } from './R4_1_Encounter_Hospitalization'
import { R4_1_Encounter_Location } from './R4_1_Encounter_Location'
import { R4_1_Encounter_Participant } from './R4_1_Encounter_Participant'
import { R4_1_Encounter_StatusHistory } from './R4_1_Encounter_StatusHistory'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Encounter      extends R4_1_DomainResource
{

   static def : string = 'Encounter';
   identifier : R4_1_Identifier [];
   status : R4_1_EncounterStatusEnum ;
   statusHistory : R4_1_Encounter_StatusHistory [];
   class : R4_1_Coding ;
   classHistory : R4_1_Encounter_ClassHistory [];
   type : R4_1_CodeableConcept [];
   serviceType : R4_1_CodeableConcept ;
   priority : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   episodeOfCare : R4_1_Reference [];
   basedOn : R4_1_Reference [];
   participant : R4_1_Encounter_Participant [];
   appointment : R4_1_Reference [];
   period : R4_1_Period ;
   length : string ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   diagnosis : R4_1_Encounter_Diagnosis [];
   account : R4_1_Reference [];
   hospitalization : R4_1_Encounter_Hospitalization ;
   location : R4_1_Encounter_Location [];
   serviceProvider : R4_1_Reference ;
   partOf : R4_1_Reference ;
}
