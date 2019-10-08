import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ImmunizationStatusCodesEnum } from './STU3_ImmunizationStatusCodesEnum'
import { STU3_Immunization_Explanation } from './STU3_Immunization_Explanation'
import { STU3_Immunization_Practitioner } from './STU3_Immunization_Practitioner'
import { STU3_Immunization_Reaction } from './STU3_Immunization_Reaction'
import { STU3_Immunization_VaccinationProtocol } from './STU3_Immunization_VaccinationProtocol'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Immunization      extends STU3_DomainResource
{

   static def : string = 'Immunization';
   identifier : STU3_Identifier [];
   status : STU3_ImmunizationStatusCodesEnum ;
   notGiven : boolean ;
   vaccineCode : STU3_CodeableConcept ;
   patient : STU3_Reference ;
   encounter : STU3_Reference ;
   date : string ;
   primarySource : boolean ;
   reportOrigin : STU3_CodeableConcept ;
   location : STU3_Reference ;
   manufacturer : STU3_Reference ;
   lotNumber : string ;
   expirationDate : string ;
   site : STU3_CodeableConcept ;
   route : STU3_CodeableConcept ;
   doseQuantity : STU3_Quantity ;
   practitioner : STU3_Immunization_Practitioner [];
   note : STU3_Annotation [];
   explanation : STU3_Immunization_Explanation ;
   reaction : STU3_Immunization_Reaction [];
   vaccinationProtocol : STU3_Immunization_VaccinationProtocol [];
}
