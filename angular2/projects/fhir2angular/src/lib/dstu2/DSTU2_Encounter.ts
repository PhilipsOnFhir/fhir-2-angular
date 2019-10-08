import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Duration } from './DSTU2_Duration'
import { DSTU2_EncounterClassEnum } from './DSTU2_EncounterClassEnum'
import { DSTU2_EncounterStateEnum } from './DSTU2_EncounterStateEnum'
import { DSTU2_Encounter_Hospitalization } from './DSTU2_Encounter_Hospitalization'
import { DSTU2_Encounter_Location } from './DSTU2_Encounter_Location'
import { DSTU2_Encounter_Participant } from './DSTU2_Encounter_Participant'
import { DSTU2_Encounter_StatusHistory } from './DSTU2_Encounter_StatusHistory'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Encounter      extends DSTU2_DomainResource
{

   static def : string = 'Encounter';
   identifier : DSTU2_Identifier [];
   status : DSTU2_EncounterStateEnum ;
   statusHistory : DSTU2_Encounter_StatusHistory [];
   class : DSTU2_EncounterClassEnum ;
   type : DSTU2_CodeableConcept [];
   priority : DSTU2_CodeableConcept ;
   patient : DSTU2_Reference ;
   episodeOfCare : DSTU2_Reference [];
   incomingReferral : DSTU2_Reference [];
   participant : DSTU2_Encounter_Participant [];
   appointment : DSTU2_Reference ;
   period : DSTU2_Period ;
   length : DSTU2_Duration ;
   reason : DSTU2_CodeableConcept [];
   indication : DSTU2_Reference [];
   hospitalization : DSTU2_Encounter_Hospitalization ;
   location : DSTU2_Encounter_Location [];
   serviceProvider : DSTU2_Reference ;
   partOf : DSTU2_Reference ;
}
