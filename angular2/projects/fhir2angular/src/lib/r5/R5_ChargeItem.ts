import { R5_Annotation } from './R5_Annotation'
import { R5_ChargeItemStatusEnum } from './R5_ChargeItemStatusEnum'
import { R5_ChargeItem_Performer } from './R5_ChargeItem_Performer'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'
import { R5_Timing } from './R5_Timing'

export class R5_ChargeItem      extends R5_DomainResource
{

   static def : string = 'ChargeItem';
   identifier : R5_Identifier [];
   definitionUri : string [];
   definitionCanonical : string [];
   status : R5_ChargeItemStatusEnum ;
   partOf : R5_Reference [];
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   context : R5_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R5_Period ;
   occurrenceTiming : R5_Timing ;
   performer : R5_ChargeItem_Performer [];
   performingOrganization : R5_Reference ;
   requestingOrganization : R5_Reference ;
   costCenter : R5_Reference ;
   quantity : R5_Quantity ;
   bodysite : R5_CodeableConcept [];
   factorOverride : string ;
   priceOverride : R5_Money ;
   overrideReason : string ;
   enterer : R5_Reference ;
   enteredDate : string ;
   reason : R5_CodeableConcept [];
   service : R5_Reference [];
   productReference : R5_Reference ;
   productCodeableConcept : R5_CodeableConcept ;
   account : R5_Reference [];
   note : R5_Annotation [];
   supportingInformation : R5_Reference [];
}
