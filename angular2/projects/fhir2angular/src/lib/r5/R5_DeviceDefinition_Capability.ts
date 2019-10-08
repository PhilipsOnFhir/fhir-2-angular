import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_DeviceDefinition_Capability      extends R5_BackboneElement
{

   static def : string = 'DeviceDefinition_Capability';
   type : R5_CodeableConcept ;
   description : R5_CodeableConcept [];
}
