import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_SubstanceReferenceInformation_GeneElement      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_GeneElement';
   type : R4_1_CodeableConcept ;
   element : R4_1_Identifier ;
   source : R4_1_Reference [];
}
