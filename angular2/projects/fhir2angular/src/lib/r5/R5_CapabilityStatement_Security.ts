import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_CapabilityStatement_Security      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Security';
   cors : boolean ;
   service : R5_CodeableConcept [];
   description : string ;
}
