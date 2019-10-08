import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CapabilityStatement_Certificate } from './STU3_CapabilityStatement_Certificate'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_CapabilityStatement_Security      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_Security';
   cors : boolean ;
   service : STU3_CodeableConcept [];
   description : string ;
   certificate : STU3_CapabilityStatement_Certificate [];
}
