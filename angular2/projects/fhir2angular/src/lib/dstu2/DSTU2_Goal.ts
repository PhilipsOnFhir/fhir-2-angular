import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Duration } from './DSTU2_Duration'
import { DSTU2_GoalStatusEnum } from './DSTU2_GoalStatusEnum'
import { DSTU2_Goal_Outcome } from './DSTU2_Goal_Outcome'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Goal      extends DSTU2_DomainResource
{

   static def : string = 'Goal';
   identifier : DSTU2_Identifier [];
   subject : DSTU2_Reference ;
   startDate : string ;
   startCodeableConcept : DSTU2_CodeableConcept ;
   targetDate : string ;
   targetQuantity : DSTU2_Duration ;
   category : DSTU2_CodeableConcept [];
   description : string ;
   status : DSTU2_GoalStatusEnum ;
   statusDate : string ;
   statusReason : DSTU2_CodeableConcept ;
   author : DSTU2_Reference ;
   priority : DSTU2_CodeableConcept ;
   addresses : DSTU2_Reference [];
   note : DSTU2_Annotation [];
   outcome : DSTU2_Goal_Outcome [];
}
