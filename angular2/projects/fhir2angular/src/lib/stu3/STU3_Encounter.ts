import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EncounterStatusEnum } from './STU3_EncounterStatusEnum'
import { STU3_Encounter_ClassHistory } from './STU3_Encounter_ClassHistory'
import { STU3_Encounter_Diagnosis } from './STU3_Encounter_Diagnosis'
import { STU3_Encounter_Hospitalization } from './STU3_Encounter_Hospitalization'
import { STU3_Encounter_Location } from './STU3_Encounter_Location'
import { STU3_Encounter_Participant } from './STU3_Encounter_Participant'
import { STU3_Encounter_StatusHistory } from './STU3_Encounter_StatusHistory'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Encounter      extends STU3_DomainResource
{

   static def : string = 'Encounter';
   identifier : STU3_Identifier [];
   status : STU3_EncounterStatusEnum ;
   statusHistory : STU3_Encounter_StatusHistory [];
   class : STU3_Coding ;
   classHistory : STU3_Encounter_ClassHistory [];
   type : STU3_CodeableConcept [];
   priority : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   episodeOfCare : STU3_Reference [];
   incomingReferral : STU3_Reference [];
   participant : STU3_Encounter_Participant [];
   appointment : STU3_Reference ;
   period : STU3_Period ;
   length : string ;
   reason : STU3_CodeableConcept [];
   diagnosis : STU3_Encounter_Diagnosis [];
   account : STU3_Reference [];
   hospitalization : STU3_Encounter_Hospitalization ;
   location : STU3_Encounter_Location [];
   serviceProvider : STU3_Reference ;
   partOf : STU3_Reference ;
}
