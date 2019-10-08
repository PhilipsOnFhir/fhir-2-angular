import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'

export class R4_MedicinalProductAuthorization_JurisdictionalAuthorization      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_JurisdictionalAuthorization';
   identifier : R4_Identifier [];
   country : R4_CodeableConcept ;
   jurisdiction : R4_CodeableConcept [];
   legalStatusOfSupply : R4_CodeableConcept ;
   validityPeriod : R4_Period ;
}
