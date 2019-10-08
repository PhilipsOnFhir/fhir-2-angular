import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_DeviceDefinition_Capability      extends R4_1_BackboneElement
{

   static def : string = 'DeviceDefinition_Capability';
   type : R4_1_CodeableConcept ;
   description : R4_1_CodeableConcept [];
}
