import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_SpecimenDefinition_Additive } from './R4_SpecimenDefinition_Additive'

export class R4_SpecimenDefinition_Container      extends R4_BackboneElement
{

   static def : string = 'SpecimenDefinition_Container';
   material : R4_CodeableConcept ;
   type : R4_CodeableConcept ;
   cap : R4_CodeableConcept ;
   description : string ;
   capacity : R4_Quantity ;
   minimumVolumeQuantity : R4_Quantity ;
   minimumVolumeString : string ;
   additive : R4_SpecimenDefinition_Additive [];
   preparation : string ;
}
