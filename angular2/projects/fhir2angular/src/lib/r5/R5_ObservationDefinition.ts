import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ObservationDataTypeEnum } from './R5_ObservationDataTypeEnum'
import { R5_ObservationDefinition_QualifiedInterval } from './R5_ObservationDefinition_QualifiedInterval'
import { R5_ObservationDefinition_QuantitativeDetails } from './R5_ObservationDefinition_QuantitativeDetails'
import { R5_Reference } from './R5_Reference'

export class R5_ObservationDefinition      extends R5_DomainResource
{

   static def : string = 'ObservationDefinition';
   category : R5_CodeableConcept [];
   code : R5_CodeableConcept ;
   identifier : R5_Identifier [];
   permittedDataType : R5_ObservationDataTypeEnum [];
   multipleResultsAllowed : boolean ;
   method : R5_CodeableConcept ;
   preferredReportName : string ;
   quantitativeDetails : R5_ObservationDefinition_QuantitativeDetails ;
   qualifiedInterval : R5_ObservationDefinition_QualifiedInterval [];
   validCodedValueSet : R5_Reference ;
   normalCodedValueSet : R5_Reference ;
   abnormalCodedValueSet : R5_Reference ;
   criticalCodedValueSet : R5_Reference ;
}
