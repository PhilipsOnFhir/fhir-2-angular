import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Device_Specialization      extends R5_BackboneElement
{

   static def : string = 'Device_Specialization';
   systemType : R5_CodeableConcept ;
   version : string ;
}
