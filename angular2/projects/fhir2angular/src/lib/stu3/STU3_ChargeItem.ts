import { STU3_Annotation } from './STU3_Annotation'
import { STU3_ChargeItemStatusEnum } from './STU3_ChargeItemStatusEnum'
import { STU3_ChargeItem_Participant } from './STU3_ChargeItem_Participant'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Timing } from './STU3_Timing'

export class STU3_ChargeItem      extends STU3_DomainResource
{

   static def : string = 'ChargeItem';
   identifier : STU3_Identifier ;
   definition : string [];
   status : STU3_ChargeItemStatusEnum ;
   partOf : STU3_Reference [];
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   occurrenceTiming : STU3_Timing ;
   participant : STU3_ChargeItem_Participant [];
   performingOrganization : STU3_Reference ;
   requestingOrganization : STU3_Reference ;
   quantity : STU3_Quantity ;
   bodysite : STU3_CodeableConcept [];
   factorOverride : string ;
   priceOverride : string ;
   overrideReason : string ;
   enterer : STU3_Reference ;
   enteredDate : string ;
   reason : STU3_CodeableConcept [];
   service : STU3_Reference [];
   account : STU3_Reference [];
   note : STU3_Annotation [];
   supportingInformation : STU3_Reference [];
}
