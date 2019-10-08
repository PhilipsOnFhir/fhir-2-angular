import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_SpecimenDefinition_Additive } from './R4_1_SpecimenDefinition_Additive'

export class R4_1_SpecimenDefinition_Container      extends R4_1_BackboneElement
{

   static def : string = 'SpecimenDefinition_Container';
   material : R4_1_CodeableConcept ;
   type : R4_1_CodeableConcept ;
   cap : R4_1_CodeableConcept ;
   description : string ;
   capacity : R4_1_Quantity ;
   minimumVolumeQuantity : R4_1_Quantity ;
   minimumVolumeString : string ;
   additive : R4_1_SpecimenDefinition_Additive [];
   preparation : string ;
}
