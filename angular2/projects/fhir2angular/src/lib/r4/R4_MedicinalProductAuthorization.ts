import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicinalProductAuthorization_JurisdictionalAuthorization } from './R4_MedicinalProductAuthorization_JurisdictionalAuthorization'
import { R4_MedicinalProductAuthorization_Procedure } from './R4_MedicinalProductAuthorization_Procedure'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductAuthorization      extends R4_DomainResource
{

   static def : string = 'MedicinalProductAuthorization';
   identifier : R4_Identifier [];
   subject : R4_Reference ;
   country : R4_CodeableConcept [];
   jurisdiction : R4_CodeableConcept [];
   status : R4_CodeableConcept ;
   statusDate : string ;
   restoreDate : string ;
   validityPeriod : R4_Period ;
   dataExclusivityPeriod : R4_Period ;
   dateOfFirstAuthorization : string ;
   internationalBirthDate : string ;
   legalBasis : R4_CodeableConcept ;
   jurisdictionalAuthorization : R4_MedicinalProductAuthorization_JurisdictionalAuthorization [];
   holder : R4_Reference ;
   regulator : R4_Reference ;
   procedure : R4_MedicinalProductAuthorization_Procedure ;
}
