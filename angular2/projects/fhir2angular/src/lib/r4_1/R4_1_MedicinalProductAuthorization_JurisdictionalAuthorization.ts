import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_MedicinalProductAuthorization_JurisdictionalAuthorization      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductAuthorization_JurisdictionalAuthorization';
   identifier : R4_1_Identifier [];
   country : R4_1_CodeableConcept ;
   jurisdiction : R4_1_CodeableConcept [];
   legalStatusOfSupply : R4_1_CodeableConcept ;
   validityPeriod : R4_1_Period ;
}
