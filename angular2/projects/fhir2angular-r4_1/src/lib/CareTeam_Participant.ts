import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class CareTeam_Participant      extends BackboneElement
{

   static def : string = 'CareTeam_Participant';
   role : CodeableConcept ;
   member : Reference ;
   onBehalfOf : Reference ;
   coveragePeriod : Period ;
   coverageTiming : Timing ;
}
