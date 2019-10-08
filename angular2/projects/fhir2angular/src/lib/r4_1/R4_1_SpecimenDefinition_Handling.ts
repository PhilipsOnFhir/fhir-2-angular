import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_SpecimenDefinition_Handling      extends R4_1_BackboneElement
{

   static def : string = 'SpecimenDefinition_Handling';
   temperatureQualifier : R4_1_CodeableConcept ;
   temperatureRange : R4_1_Range ;
   maxDuration : string ;
   instruction : string ;
}
