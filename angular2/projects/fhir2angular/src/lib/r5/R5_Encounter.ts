import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EncounterStatusEnum } from './R5_EncounterStatusEnum'
import { R5_Encounter_ClassHistory } from './R5_Encounter_ClassHistory'
import { R5_Encounter_Diagnosis } from './R5_Encounter_Diagnosis'
import { R5_Encounter_Hospitalization } from './R5_Encounter_Hospitalization'
import { R5_Encounter_Location } from './R5_Encounter_Location'
import { R5_Encounter_Participant } from './R5_Encounter_Participant'
import { R5_Encounter_StatusHistory } from './R5_Encounter_StatusHistory'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Encounter      extends R5_DomainResource
{

   static def : string = 'Encounter';
   identifier : R5_Identifier [];
   status : R5_EncounterStatusEnum ;
   statusHistory : R5_Encounter_StatusHistory [];
   class : R5_Coding ;
   classHistory : R5_Encounter_ClassHistory [];
   type : R5_CodeableConcept [];
   serviceType : R5_CodeableConcept ;
   priority : R5_CodeableConcept ;
   subject : R5_Reference ;
   episodeOfCare : R5_Reference [];
   basedOn : R5_Reference [];
   participant : R5_Encounter_Participant [];
   appointment : R5_Reference [];
   period : R5_Period ;
   length : string ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   diagnosis : R5_Encounter_Diagnosis [];
   account : R5_Reference [];
   hospitalization : R5_Encounter_Hospitalization ;
   location : R5_Encounter_Location [];
   serviceProvider : R5_Reference ;
   partOf : R5_Reference ;
}
