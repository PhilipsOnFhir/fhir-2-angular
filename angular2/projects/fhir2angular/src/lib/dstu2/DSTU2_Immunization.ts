import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Immunization_Explanation } from './DSTU2_Immunization_Explanation'
import { DSTU2_Immunization_Reaction } from './DSTU2_Immunization_Reaction'
import { DSTU2_Immunization_VaccinationProtocol } from './DSTU2_Immunization_VaccinationProtocol'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Immunization      extends DSTU2_DomainResource
{

   static def : string = 'Immunization';
   identifier : DSTU2_Identifier [];
   status : string ;
   date : string ;
   vaccineCode : DSTU2_CodeableConcept ;
   patient : DSTU2_Reference ;
   wasNotGiven : boolean ;
   reported : boolean ;
   performer : DSTU2_Reference ;
   requester : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   manufacturer : DSTU2_Reference ;
   location : DSTU2_Reference ;
   lotNumber : string ;
   expirationDate : string ;
   site : DSTU2_CodeableConcept ;
   route : DSTU2_CodeableConcept ;
   doseQuantity : DSTU2_SimpleQuantity ;
   note : DSTU2_Annotation [];
   explanation : DSTU2_Immunization_Explanation ;
   reaction : DSTU2_Immunization_Reaction [];
   vaccinationProtocol : DSTU2_Immunization_VaccinationProtocol [];
}
