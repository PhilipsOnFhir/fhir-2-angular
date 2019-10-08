import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { SpecimenDefinition_TypeTested } from './SpecimenDefinition_TypeTested'
import { UsageContext } from './UsageContext'

export class SpecimenDefinition      extends DomainResource
{

   static def : string = 'SpecimenDefinition';
   url : string ;
   identifier : Identifier ;
   version : string ;
   title : string ;
   derivedFromCanonical : string [];
   derivedFromUri : string [];
   status : PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : CodeableConcept ;
   subjectReference : Reference ;
   date : string ;
   publisher : Reference ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : Period ;
   typeCollected : CodeableConcept ;
   patientPreparation : CodeableConcept [];
   timeAspect : string ;
   collection : CodeableConcept [];
   typeTested : SpecimenDefinition_TypeTested [];
}
