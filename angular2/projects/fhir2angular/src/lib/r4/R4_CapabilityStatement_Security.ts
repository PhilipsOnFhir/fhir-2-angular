import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_CapabilityStatement_Security      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_Security';
   cors : boolean ;
   service : R4_CodeableConcept [];
   description : string ;
}
