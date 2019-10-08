import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_GuidanceRequest      extends STU3_DomainResource
{

   static def : string = 'GuidanceRequest';
   module : STU3_Reference ;
   dateTime : string ;
   evaluateAtDateTime : string ;
   inputParameters : STU3_Reference ;
   initiatingOrganization : STU3_Reference ;
   initiatingPerson : STU3_Reference ;
   userType : STU3_CodeableConcept ;
   userLanguage : STU3_CodeableConcept ;
   userTaskContext : STU3_CodeableConcept ;
   receivingOrganization : STU3_Reference ;
   receivingPerson : STU3_Reference ;
   recipientType : STU3_CodeableConcept ;
   recipientLanguage : STU3_CodeableConcept ;
   encounterClass : STU3_CodeableConcept ;
   encounterType : STU3_CodeableConcept ;
}
