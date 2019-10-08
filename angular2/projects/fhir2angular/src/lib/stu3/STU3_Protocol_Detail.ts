import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ProtocolActivityDefinitionCategoryEnum } from './STU3_ProtocolActivityDefinitionCategoryEnum'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Timing } from './STU3_Timing'

export class STU3_Protocol_Detail      extends STU3_BackboneElement
{

   static def : string = 'Protocol_Detail';
   category : STU3_ProtocolActivityDefinitionCategoryEnum ;
   code : STU3_CodeableConcept ;
   timingCodeableConcept : STU3_CodeableConcept ;
   timingTiming : STU3_Timing ;
   location : STU3_Reference ;
   performer : STU3_Reference [];
   productReference : STU3_Reference ;
   productCodeableConcept : STU3_CodeableConcept ;
   quantity : STU3_Quantity ;
   description : string ;
}
