import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_SubstanceReferenceInformation_GeneElement      extends R5_BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_GeneElement';
   type : R5_CodeableConcept ;
   element : R5_Identifier ;
   source : R5_Reference [];
}
