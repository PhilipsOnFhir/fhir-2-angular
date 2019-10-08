import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_ReferralStatusEnum } from './DSTU2_ReferralStatusEnum'

export class DSTU2_ReferralRequest      extends DSTU2_DomainResource
{

   static def : string = 'ReferralRequest';
   status : DSTU2_ReferralStatusEnum ;
   identifier : DSTU2_Identifier [];
   date : string ;
   type : DSTU2_CodeableConcept ;
   specialty : DSTU2_CodeableConcept ;
   priority : DSTU2_CodeableConcept ;
   patient : DSTU2_Reference ;
   requester : DSTU2_Reference ;
   recipient : DSTU2_Reference [];
   encounter : DSTU2_Reference ;
   dateSent : string ;
   reason : DSTU2_CodeableConcept ;
   description : string ;
   serviceRequested : DSTU2_CodeableConcept [];
   supportingInformation : DSTU2_Reference [];
   fulfillmentTime : DSTU2_Period ;
}
