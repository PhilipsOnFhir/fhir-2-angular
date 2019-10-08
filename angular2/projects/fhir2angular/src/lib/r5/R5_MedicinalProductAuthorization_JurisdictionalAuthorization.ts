import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'

export class R5_MedicinalProductAuthorization_JurisdictionalAuthorization      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_JurisdictionalAuthorization';
   identifier : R5_Identifier [];
   country : R5_CodeableConcept ;
   jurisdiction : R5_CodeableConcept [];
   legalStatusOfSupply : R5_CodeableConcept ;
   validityPeriod : R5_Period ;
}
