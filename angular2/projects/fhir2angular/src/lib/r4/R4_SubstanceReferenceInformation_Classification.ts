import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_SubstanceReferenceInformation_Classification      extends R4_BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Classification';
   domain : R4_CodeableConcept ;
   classification : R4_CodeableConcept ;
   subtype : R4_CodeableConcept [];
   source : R4_Reference [];
}
