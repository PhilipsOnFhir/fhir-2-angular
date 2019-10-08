import { R4_AdministrativeGenderEnum } from './R4_AdministrativeGenderEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ObservationRangeCategoryEnum } from './R4_ObservationRangeCategoryEnum'
import { R4_Range } from './R4_Range'

export class R4_ObservationDefinition_QualifiedInterval      extends R4_BackboneElement
{

   static def : string = 'ObservationDefinition_QualifiedInterval';
   category : R4_ObservationRangeCategoryEnum ;
   range : R4_Range ;
   context : R4_CodeableConcept ;
   appliesTo : R4_CodeableConcept [];
   gender : R4_AdministrativeGenderEnum ;
   age : R4_Range ;
   gestationalAge : R4_Range ;
   condition : string ;
}
