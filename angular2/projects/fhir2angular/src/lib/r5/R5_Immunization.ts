import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ImmunizationStatusCodesEnum } from './R5_ImmunizationStatusCodesEnum'
import { R5_Immunization_Education } from './R5_Immunization_Education'
import { R5_Immunization_Performer } from './R5_Immunization_Performer'
import { R5_Immunization_ProtocolApplied } from './R5_Immunization_ProtocolApplied'
import { R5_Immunization_Reaction } from './R5_Immunization_Reaction'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_Immunization      extends R5_DomainResource
{

   static def : string = 'Immunization';
   identifier : R5_Identifier [];
   status : R5_ImmunizationStatusCodesEnum ;
   statusReason : R5_CodeableConcept ;
   vaccineCode : R5_CodeableConcept ;
   patient : R5_Reference ;
   encounter : R5_Reference ;
   occurrenceDateTime : string ;
   occurrenceString : string ;
   recorded : string ;
   primarySource : boolean ;
   reportOrigin : R5_CodeableConcept ;
   location : R5_Reference ;
   manufacturer : R5_Reference ;
   lotNumber : string ;
   expirationDate : string ;
   site : R5_CodeableConcept ;
   route : R5_CodeableConcept ;
   doseQuantity : R5_Quantity ;
   performer : R5_Immunization_Performer [];
   note : R5_Annotation [];
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   isSubpotent : boolean ;
   subpotentReason : R5_CodeableConcept [];
   education : R5_Immunization_Education [];
   programEligibility : R5_CodeableConcept [];
   fundingSource : R5_CodeableConcept ;
   reaction : R5_Immunization_Reaction [];
   protocolApplied : R5_Immunization_ProtocolApplied [];
}
