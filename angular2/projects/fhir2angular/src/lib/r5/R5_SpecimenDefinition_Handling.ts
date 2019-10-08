import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Range } from './R5_Range'

export class R5_SpecimenDefinition_Handling      extends R5_BackboneElement
{

   static def : string = 'SpecimenDefinition_Handling';
   temperatureQualifier : R5_CodeableConcept ;
   temperatureRange : R5_Range ;
   maxDuration : string ;
   instruction : string ;
}
