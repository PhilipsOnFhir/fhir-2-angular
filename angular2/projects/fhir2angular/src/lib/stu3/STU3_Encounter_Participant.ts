import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Encounter_Participant      extends STU3_BackboneElement
{

   static def : string = 'Encounter_Participant';
   type : STU3_CodeableConcept [];
   period : STU3_Period ;
   individual : STU3_Reference ;
}
