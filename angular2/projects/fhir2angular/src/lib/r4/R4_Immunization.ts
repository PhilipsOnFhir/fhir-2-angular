import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ImmunizationStatusCodesEnum } from './R4_ImmunizationStatusCodesEnum'
import { R4_Immunization_Education } from './R4_Immunization_Education'
import { R4_Immunization_Performer } from './R4_Immunization_Performer'
import { R4_Immunization_ProtocolApplied } from './R4_Immunization_ProtocolApplied'
import { R4_Immunization_Reaction } from './R4_Immunization_Reaction'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_Immunization      extends R4_DomainResource
{

   static def : string = 'Immunization';
   identifier : R4_Identifier [];
   status : R4_ImmunizationStatusCodesEnum ;
   statusReason : R4_CodeableConcept ;
   vaccineCode : R4_CodeableConcept ;
   patient : R4_Reference ;
   encounter : R4_Reference ;
   occurrenceDateTime : string ;
   occurrenceString : string ;
   recorded : string ;
   primarySource : boolean ;
   reportOrigin : R4_CodeableConcept ;
   location : R4_Reference ;
   manufacturer : R4_Reference ;
   lotNumber : string ;
   expirationDate : string ;
   site : R4_CodeableConcept ;
   route : R4_CodeableConcept ;
   doseQuantity : R4_Quantity ;
   performer : R4_Immunization_Performer [];
   note : R4_Annotation [];
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   isSubpotent : boolean ;
   subpotentReason : R4_CodeableConcept [];
   education : R4_Immunization_Education [];
   programEligibility : R4_CodeableConcept [];
   fundingSource : R4_CodeableConcept ;
   reaction : R4_Immunization_Reaction [];
   protocolApplied : R4_Immunization_ProtocolApplied [];
}
