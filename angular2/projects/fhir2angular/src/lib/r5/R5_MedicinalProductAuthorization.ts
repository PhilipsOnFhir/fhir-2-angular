import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicinalProductAuthorization_JurisdictionalAuthorization } from './R5_MedicinalProductAuthorization_JurisdictionalAuthorization'
import { R5_MedicinalProductAuthorization_Procedure } from './R5_MedicinalProductAuthorization_Procedure'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductAuthorization      extends R5_DomainResource
{

   static def : string = 'MedicinalProductAuthorization';
   identifier : R5_Identifier [];
   subject : R5_Reference ;
   country : R5_CodeableConcept [];
   jurisdiction : R5_CodeableConcept [];
   status : R5_CodeableConcept ;
   statusDate : string ;
   restoreDate : string ;
   validityPeriod : R5_Period ;
   dataExclusivityPeriod : R5_Period ;
   dateOfFirstAuthorization : string ;
   internationalBirthDate : string ;
   legalBasis : R5_CodeableConcept ;
   jurisdictionalAuthorization : R5_MedicinalProductAuthorization_JurisdictionalAuthorization [];
   holder : R5_Reference ;
   regulator : R5_Reference ;
   procedure : R5_MedicinalProductAuthorization_Procedure ;
}
