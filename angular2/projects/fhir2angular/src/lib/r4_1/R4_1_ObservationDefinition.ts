import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ObservationDataTypeEnum } from './R4_1_ObservationDataTypeEnum'
import { R4_1_ObservationDefinition_QualifiedInterval } from './R4_1_ObservationDefinition_QualifiedInterval'
import { R4_1_ObservationDefinition_QuantitativeDetails } from './R4_1_ObservationDefinition_QuantitativeDetails'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ObservationDefinition      extends R4_1_DomainResource
{

   static def : string = 'ObservationDefinition';
   category : R4_1_CodeableConcept [];
   code : R4_1_CodeableConcept ;
   identifier : R4_1_Identifier [];
   permittedDataType : R4_1_ObservationDataTypeEnum [];
   multipleResultsAllowed : boolean ;
   method : R4_1_CodeableConcept ;
   preferredReportName : string ;
   quantitativeDetails : R4_1_ObservationDefinition_QuantitativeDetails ;
   qualifiedInterval : R4_1_ObservationDefinition_QualifiedInterval [];
   validCodedValueSet : R4_1_Reference ;
   normalCodedValueSet : R4_1_Reference ;
   abnormalCodedValueSet : R4_1_Reference ;
   criticalCodedValueSet : R4_1_Reference ;
}
