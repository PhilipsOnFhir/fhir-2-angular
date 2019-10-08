import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicinalProductAuthorization_JurisdictionalAuthorization } from './R4_1_MedicinalProductAuthorization_JurisdictionalAuthorization'
import { R4_1_MedicinalProductAuthorization_Procedure } from './R4_1_MedicinalProductAuthorization_Procedure'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductAuthorization      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductAuthorization';
   identifier : R4_1_Identifier [];
   subject : R4_1_Reference ;
   country : R4_1_CodeableConcept [];
   jurisdiction : R4_1_CodeableConcept [];
   status : R4_1_CodeableConcept ;
   statusDate : string ;
   restoreDate : string ;
   validityPeriod : R4_1_Period ;
   dataExclusivityPeriod : R4_1_Period ;
   dateOfFirstAuthorization : string ;
   internationalBirthDate : string ;
   legalBasis : R4_1_CodeableConcept ;
   jurisdictionalAuthorization : R4_1_MedicinalProductAuthorization_JurisdictionalAuthorization [];
   holder : R4_1_Reference ;
   regulator : R4_1_Reference ;
   procedure : R4_1_MedicinalProductAuthorization_Procedure ;
}
