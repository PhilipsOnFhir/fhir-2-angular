import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Range } from './R4_Range'

export class R4_SpecimenDefinition_Handling      extends R4_BackboneElement
{

   static def : string = 'SpecimenDefinition_Handling';
   temperatureQualifier : R4_CodeableConcept ;
   temperatureRange : R4_Range ;
   maxDuration : string ;
   instruction : string ;
}
