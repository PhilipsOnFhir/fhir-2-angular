import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ObservationDataTypeEnum } from './ObservationDataTypeEnum'
import { ObservationDefinition_Component } from './ObservationDefinition_Component'
import { ObservationDefinition_QualifiedInterval } from './ObservationDefinition_QualifiedInterval'
import { ObservationDefinition_QuantitativeDetails } from './ObservationDefinition_QuantitativeDetails'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { UsageContext } from './UsageContext'

export class ObservationDefinition      extends DomainResource
{

   static def : string = 'ObservationDefinition';
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
   performerType : CodeableConcept ;
   category : CodeableConcept [];
   code : CodeableConcept ;
   permittedDataType : ObservationDataTypeEnum [];
   multipleResultsAllowed : boolean ;
   bodySite : CodeableConcept ;
   method : CodeableConcept ;
   specimen : Reference ;
   device : Reference ;
   preferredReportName : string ;
   quantitativeDetails : ObservationDefinition_QuantitativeDetails ;
   qualifiedInterval : ObservationDefinition_QualifiedInterval [];
   validCodedValueSet : Reference ;
   normalCodedValueSet : Reference ;
   abnormalCodedValueSet : Reference ;
   criticalCodedValueSet : Reference ;
   hasMember : Reference [];
   component : ObservationDefinition_Component [];
}
