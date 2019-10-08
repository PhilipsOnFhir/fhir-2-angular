import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Conformance_Certificate } from './R4_Conformance_Certificate'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Conformance_Security      extends R4_BackboneElement
{

   static def : string = 'Conformance_Security';
   cors : boolean ;
   service : R4_CodeableConcept [];
   description : string ;
   certificate : R4_Conformance_Certificate [];
}
