import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_CareTeam_Participant      extends R5_BackboneElement
{

   static def : string = 'CareTeam_Participant';
   role : R5_CodeableConcept [];
   member : R5_Reference ;
   onBehalfOf : R5_Reference ;
   period : R5_Period ;
}
