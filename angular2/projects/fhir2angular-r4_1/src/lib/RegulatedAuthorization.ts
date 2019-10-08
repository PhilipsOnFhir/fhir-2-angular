import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RegulatedAuthorization_Case } from './RegulatedAuthorization_Case'
import { RegulatedAuthorization_RelatedDate } from './RegulatedAuthorization_RelatedDate'

export class RegulatedAuthorization      extends DomainResource
{

   static def : string = 'RegulatedAuthorization';
   identifier : Identifier [];
   subject : Reference ;
   type : CodeableConcept ;
   description : string ;
   region : CodeableConcept [];
   status : CodeableConcept ;
   statusDate : string ;
   validityPeriod : Period ;
   basis : CodeableConcept [];
   relatedDate : RegulatedAuthorization_RelatedDate [];
   jurisdictionalAuthorization : Reference [];
   holder : Reference ;
   regulator : Reference ;
   case : RegulatedAuthorization_Case ;
}
