import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_SubstanceReferenceInformation_Classification      extends R5_BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Classification';
   domain : R5_CodeableConcept ;
   classification : R5_CodeableConcept ;
   subtype : R5_CodeableConcept [];
   source : R5_Reference [];
}
