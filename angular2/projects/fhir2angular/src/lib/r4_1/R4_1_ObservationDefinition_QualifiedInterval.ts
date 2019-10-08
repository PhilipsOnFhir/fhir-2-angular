import { R4_1_AdministrativeGenderEnum } from './R4_1_AdministrativeGenderEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ObservationRangeCategoryEnum } from './R4_1_ObservationRangeCategoryEnum'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_ObservationDefinition_QualifiedInterval      extends R4_1_BackboneElement
{

   static def : string = 'ObservationDefinition_QualifiedInterval';
   category : R4_1_ObservationRangeCategoryEnum ;
   range : R4_1_Range ;
   context : R4_1_CodeableConcept ;
   appliesTo : R4_1_CodeableConcept [];
   gender : R4_1_AdministrativeGenderEnum ;
   age : R4_1_Range ;
   gestationalAge : R4_1_Range ;
   condition : string ;
}
