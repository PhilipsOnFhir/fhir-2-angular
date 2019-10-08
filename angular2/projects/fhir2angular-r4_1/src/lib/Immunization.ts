import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImmunizationStatusCodesEnum } from './ImmunizationStatusCodesEnum'
import { Immunization_Education } from './Immunization_Education'
import { Immunization_Performer } from './Immunization_Performer'
import { Immunization_ProtocolApplied } from './Immunization_ProtocolApplied'
import { Immunization_Reaction } from './Immunization_Reaction'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Immunization      extends DomainResource
{

   static def : string = 'Immunization';
   identifier : Identifier [];
   status : ImmunizationStatusCodesEnum ;
   statusReason : CodeableConcept ;
   vaccineCode : CodeableConcept ;
   patient : Reference ;
   encounter : Reference ;
   occurrenceDateTime : string ;
   occurrenceString : string ;
   recorded : string ;
   primarySource : boolean ;
   informationSourceCodeableConcept : CodeableConcept ;
   informationSourceReference : Reference ;
   location : Reference ;
   manufacturer : Reference ;
   lotNumber : string ;
   expirationDate : string ;
   site : CodeableConcept ;
   route : CodeableConcept ;
   doseQuantity : Quantity ;
   performer : Immunization_Performer [];
   note : Annotation [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   isSubpotent : boolean ;
   subpotentReason : CodeableConcept [];
   education : Immunization_Education [];
   programEligibility : CodeableConcept [];
   fundingSource : CodeableConcept ;
   reaction : Immunization_Reaction [];
   protocolApplied : Immunization_ProtocolApplied [];
}
