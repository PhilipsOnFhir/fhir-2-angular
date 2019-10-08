import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CareTeam_Participant      extends R4_1_BackboneElement
{

   static def : string = 'CareTeam_Participant';
   role : R4_1_CodeableConcept [];
   member : R4_1_Reference ;
   onBehalfOf : R4_1_Reference ;
   period : R4_1_Period ;
}
