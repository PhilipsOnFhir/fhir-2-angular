import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_SpecimenDefinition_Additive } from './R5_SpecimenDefinition_Additive'

export class R5_SpecimenDefinition_Container      extends R5_BackboneElement
{

   static def : string = 'SpecimenDefinition_Container';
   material : R5_CodeableConcept ;
   type : R5_CodeableConcept ;
   cap : R5_CodeableConcept ;
   description : string ;
   capacity : R5_Quantity ;
   minimumVolumeQuantity : R5_Quantity ;
   minimumVolumeString : string ;
   additive : R5_SpecimenDefinition_Additive [];
   preparation : string ;
}
