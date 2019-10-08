import { AdverseEventActualityEnum } from './AdverseEventActualityEnum'
import { AdverseEventStatusEnum } from './AdverseEventStatusEnum'
import { AdverseEvent_Participant } from './AdverseEvent_Participant'
import { AdverseEvent_SupportingInfo } from './AdverseEvent_SupportingInfo'
import { AdverseEvent_SuspectEntity } from './AdverseEvent_SuspectEntity'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class AdverseEvent      extends DomainResource
{

   static def : string = 'AdverseEvent';
   identifier : Identifier [];
   status : AdverseEventStatusEnum ;
   actuality : AdverseEventActualityEnum ;
   category : CodeableConcept [];
   code : CodeableConcept ;
   subject : Reference ;
   encounter : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   detected : string ;
   recordedDate : string ;
   resultingCondition : Reference [];
   location : Reference ;
   seriousness : CodeableConcept ;
   outcome : CodeableConcept ;
   recorder : Reference ;
   participant : AdverseEvent_Participant [];
   suspectEntity : AdverseEvent_SuspectEntity [];
   supportingInfo : AdverseEvent_SupportingInfo [];
   study : Reference [];
}
