import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'

export class R5_Device_Version      extends R5_BackboneElement
{

   static def : string = 'Device_Version';
   type : R5_CodeableConcept ;
   component : R5_Identifier ;
   value : string ;
}
