import { R5_AdministrativeGenderEnum } from './R5_AdministrativeGenderEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ObservationRangeCategoryEnum } from './R5_ObservationRangeCategoryEnum'
import { R5_Range } from './R5_Range'

export class R5_ObservationDefinition_QualifiedInterval      extends R5_BackboneElement
{

   static def : string = 'ObservationDefinition_QualifiedInterval';
   category : R5_ObservationRangeCategoryEnum ;
   range : R5_Range ;
   context : R5_CodeableConcept ;
   appliesTo : R5_CodeableConcept [];
   gender : R5_AdministrativeGenderEnum ;
   age : R5_Range ;
   gestationalAge : R5_Range ;
   condition : string ;
}
