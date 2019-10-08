import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ObservationDataTypeEnum } from './ObservationDataTypeEnum'
import { ObservationDefinition_QualifiedInterval } from './ObservationDefinition_QualifiedInterval'
import { ObservationDefinition_QuantitativeDetails } from './ObservationDefinition_QuantitativeDetails'

export class ObservationDefinition_Component      extends BackboneElement
{

   static def : string = 'ObservationDefinition_Component';
   code : CodeableConcept ;
   permittedDataType : ObservationDataTypeEnum [];
   quantitativeDetails : ObservationDefinition_QuantitativeDetails ;
   qualifiedInterval : ObservationDefinition_QualifiedInterval [];
}
