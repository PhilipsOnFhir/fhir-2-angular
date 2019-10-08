import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Conformance_Certificate } from './DSTU2_Conformance_Certificate'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Conformance_Security      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Security';
   cors : boolean ;
   service : DSTU2_CodeableConcept [];
   description : string ;
   certificate : DSTU2_Conformance_Certificate [];
}
