import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_CareTeam_Participant      extends R4_BackboneElement
{

   static def : string = 'CareTeam_Participant';
   role : R4_CodeableConcept [];
   member : R4_Reference ;
   onBehalfOf : R4_Reference ;
   period : R4_Period ;
}
