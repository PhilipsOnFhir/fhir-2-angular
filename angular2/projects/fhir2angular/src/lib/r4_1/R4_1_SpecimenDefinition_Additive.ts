import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_SpecimenDefinition_Additive      extends R4_1_BackboneElement
{

   static def : string = 'SpecimenDefinition_Additive';
   additiveCodeableConcept : R4_1_CodeableConcept ;
   additiveReference : R4_1_Reference ;
}
