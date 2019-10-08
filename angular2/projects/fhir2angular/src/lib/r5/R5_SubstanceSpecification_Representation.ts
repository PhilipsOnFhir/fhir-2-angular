import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_SubstanceSpecification_Representation      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Representation';
   type : R5_CodeableConcept ;
   representation : string ;
   attachment : R5_Attachment ;
}
