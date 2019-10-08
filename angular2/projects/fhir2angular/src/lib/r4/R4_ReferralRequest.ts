import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_ReferralStatusEnum } from './R4_ReferralStatusEnum'

export class R4_ReferralRequest      extends R4_DomainResource
{

   static def : string = 'ReferralRequest';
   status : R4_ReferralStatusEnum ;
   identifier : R4_Identifier [];
   date : string ;
   type : R4_CodeableConcept ;
   specialty : R4_CodeableConcept ;
   priority : R4_CodeableConcept ;
   patient : R4_Reference ;
   requester : R4_Reference ;
   recipient : R4_Reference [];
   encounter : R4_Reference ;
   dateSent : string ;
   reason : R4_CodeableConcept ;
   description : string ;
   serviceRequested : R4_CodeableConcept [];
   supportingInformation : R4_Reference [];
   fulfillmentTime : R4_Period ;
}
