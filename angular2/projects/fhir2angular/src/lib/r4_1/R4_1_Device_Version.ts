import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'

export class R4_1_Device_Version      extends R4_1_BackboneElement
{

   static def : string = 'Device_Version';
   type : R4_1_CodeableConcept ;
   component : R4_1_Identifier ;
   value : string ;
}
