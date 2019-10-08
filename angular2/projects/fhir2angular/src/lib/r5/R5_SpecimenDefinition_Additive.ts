import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_SpecimenDefinition_Additive      extends R5_BackboneElement
{

   static def : string = 'SpecimenDefinition_Additive';
   additiveCodeableConcept : R5_CodeableConcept ;
   additiveReference : R5_Reference ;
}
