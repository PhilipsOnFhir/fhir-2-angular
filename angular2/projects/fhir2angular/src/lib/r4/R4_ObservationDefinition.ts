import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ObservationDataTypeEnum } from './R4_ObservationDataTypeEnum'
import { R4_ObservationDefinition_QualifiedInterval } from './R4_ObservationDefinition_QualifiedInterval'
import { R4_ObservationDefinition_QuantitativeDetails } from './R4_ObservationDefinition_QuantitativeDetails'
import { R4_Reference } from './R4_Reference'

export class R4_ObservationDefinition      extends R4_DomainResource
{

   static def : string = 'ObservationDefinition';
   category : R4_CodeableConcept [];
   code : R4_CodeableConcept ;
   identifier : R4_Identifier [];
   permittedDataType : R4_ObservationDataTypeEnum [];
   multipleResultsAllowed : boolean ;
   method : R4_CodeableConcept ;
   preferredReportName : string ;
   quantitativeDetails : R4_ObservationDefinition_QuantitativeDetails ;
   qualifiedInterval : R4_ObservationDefinition_QualifiedInterval [];
   validCodedValueSet : R4_Reference ;
   normalCodedValueSet : R4_Reference ;
   abnormalCodedValueSet : R4_Reference ;
   criticalCodedValueSet : R4_Reference ;
}
