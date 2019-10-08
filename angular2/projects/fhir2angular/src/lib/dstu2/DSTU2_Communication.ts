import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_CommunicationStatusEnum } from './DSTU2_CommunicationStatusEnum'
import { DSTU2_Communication_Payload } from './DSTU2_Communication_Payload'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Communication      extends DSTU2_DomainResource
{

   static def : string = 'Communication';
   identifier : DSTU2_Identifier [];
   category : DSTU2_CodeableConcept ;
   sender : DSTU2_Reference ;
   recipient : DSTU2_Reference [];
   payload : DSTU2_Communication_Payload [];
   medium : DSTU2_CodeableConcept [];
   status : DSTU2_CommunicationStatusEnum ;
   encounter : DSTU2_Reference ;
   sent : string ;
   received : string ;
   reason : DSTU2_CodeableConcept [];
   subject : DSTU2_Reference ;
   requestDetail : DSTU2_Reference ;
}
