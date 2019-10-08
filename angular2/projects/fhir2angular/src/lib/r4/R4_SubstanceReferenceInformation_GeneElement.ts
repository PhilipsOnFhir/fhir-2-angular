import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_SubstanceReferenceInformation_GeneElement      extends R4_BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_GeneElement';
   type : R4_CodeableConcept ;
   element : R4_Identifier ;
   source : R4_Reference [];
}
