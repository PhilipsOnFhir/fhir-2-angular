import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_SubstanceSpecification_Representation      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Representation';
   type : R4_1_CodeableConcept ;
   representation : string ;
   attachment : R4_1_Attachment ;
}
