import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Encounter_Participant      extends DSTU2_BackboneElement
{

   static def : string = 'Encounter_Participant';
   type : DSTU2_CodeableConcept [];
   period : DSTU2_Period ;
   individual : DSTU2_Reference ;
}
