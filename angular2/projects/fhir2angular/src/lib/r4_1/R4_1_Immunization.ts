import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ImmunizationStatusCodesEnum } from './R4_1_ImmunizationStatusCodesEnum'
import { R4_1_Immunization_Education } from './R4_1_Immunization_Education'
import { R4_1_Immunization_Performer } from './R4_1_Immunization_Performer'
import { R4_1_Immunization_ProtocolApplied } from './R4_1_Immunization_ProtocolApplied'
import { R4_1_Immunization_Reaction } from './R4_1_Immunization_Reaction'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Immunization      extends R4_1_DomainResource
{

   static def : string = 'Immunization';
   identifier : R4_1_Identifier [];
   status : R4_1_ImmunizationStatusCodesEnum ;
   statusReason : R4_1_CodeableConcept ;
   vaccineCode : R4_1_CodeableConcept ;
   patient : R4_1_Reference ;
   encounter : R4_1_Reference ;
   occurrenceDateTime : string ;
   occurrenceString : string ;
   recorded : string ;
   primarySource : boolean ;
   reportOrigin : R4_1_CodeableConcept ;
   location : R4_1_Reference ;
   manufacturer : R4_1_Reference ;
   lotNumber : string ;
   expirationDate : string ;
   site : R4_1_CodeableConcept ;
   route : R4_1_CodeableConcept ;
   doseQuantity : R4_1_Quantity ;
   performer : R4_1_Immunization_Performer [];
   note : R4_1_Annotation [];
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   isSubpotent : boolean ;
   subpotentReason : R4_1_CodeableConcept [];
   education : R4_1_Immunization_Education [];
   programEligibility : R4_1_CodeableConcept [];
   fundingSource : R4_1_CodeableConcept ;
   reaction : R4_1_Immunization_Reaction [];
   protocolApplied : R4_1_Immunization_ProtocolApplied [];
}
