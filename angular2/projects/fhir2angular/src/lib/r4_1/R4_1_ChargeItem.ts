import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_ChargeItemStatusEnum } from './R4_1_ChargeItemStatusEnum'
import { R4_1_ChargeItem_Performer } from './R4_1_ChargeItem_Performer'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_ChargeItem      extends R4_1_DomainResource
{

   static def : string = 'ChargeItem';
   identifier : R4_1_Identifier [];
   definitionUri : string [];
   definitionCanonical : string [];
   status : R4_1_ChargeItemStatusEnum ;
   partOf : R4_1_Reference [];
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   context : R4_1_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_1_Period ;
   occurrenceTiming : R4_1_Timing ;
   performer : R4_1_ChargeItem_Performer [];
   performingOrganization : R4_1_Reference ;
   requestingOrganization : R4_1_Reference ;
   costCenter : R4_1_Reference ;
   quantity : R4_1_Quantity ;
   bodysite : R4_1_CodeableConcept [];
   factorOverride : string ;
   priceOverride : R4_1_Money ;
   overrideReason : string ;
   enterer : R4_1_Reference ;
   enteredDate : string ;
   reason : R4_1_CodeableConcept [];
   service : R4_1_Reference [];
   productReference : R4_1_Reference ;
   productCodeableConcept : R4_1_CodeableConcept ;
   account : R4_1_Reference [];
   note : R4_1_Annotation [];
   supportingInformation : R4_1_Reference [];
}
