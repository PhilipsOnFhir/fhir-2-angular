import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_DeviceDefinition_Capability      extends R4_BackboneElement
{

   static def : string = 'DeviceDefinition_Capability';
   type : R4_CodeableConcept ;
   description : R4_CodeableConcept [];
}
