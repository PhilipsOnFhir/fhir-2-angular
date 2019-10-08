import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_SubstancePolymer_StructuralRepresentation      extends R4_BackboneElement
{

   static def : string = 'SubstancePolymer_StructuralRepresentation';
   type : R4_CodeableConcept ;
   representation : string ;
   attachment : R4_Attachment ;
}
