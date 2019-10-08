import { R4_Annotation } from './R4_Annotation'
import { R4_ChargeItemStatusEnum } from './R4_ChargeItemStatusEnum'
import { R4_ChargeItem_Performer } from './R4_ChargeItem_Performer'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'

export class R4_ChargeItem      extends R4_DomainResource
{

   static def : string = 'ChargeItem';
   identifier : R4_Identifier [];
   definitionUri : string [];
   definitionCanonical : string [];
   status : R4_ChargeItemStatusEnum ;
   partOf : R4_Reference [];
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   context : R4_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_Period ;
   occurrenceTiming : R4_Timing ;
   performer : R4_ChargeItem_Performer [];
   performingOrganization : R4_Reference ;
   requestingOrganization : R4_Reference ;
   costCenter : R4_Reference ;
   quantity : R4_Quantity ;
   bodysite : R4_CodeableConcept [];
   factorOverride : string ;
   priceOverride : R4_Money ;
   overrideReason : string ;
   enterer : R4_Reference ;
   enteredDate : string ;
   reason : R4_CodeableConcept [];
   service : R4_Reference [];
   productReference : R4_Reference ;
   productCodeableConcept : R4_CodeableConcept ;
   account : R4_Reference [];
   note : R4_Annotation [];
   supportingInformation : R4_Reference [];
}
