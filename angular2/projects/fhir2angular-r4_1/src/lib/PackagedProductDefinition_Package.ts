import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PackagedProductDefinition_Characteristic } from './PackagedProductDefinition_Characteristic'
import { PackagedProductDefinition_ContainedItem } from './PackagedProductDefinition_ContainedItem'
import { ProductShelfLife } from './ProductShelfLife'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class PackagedProductDefinition_Package      extends BackboneElement
{

   static def : string = 'PackagedProductDefinition_Package';
   identifier : Identifier [];
   type : CodeableConcept ;
   quantity : Quantity ;
   material : CodeableConcept [];
   alternateMaterial : CodeableConcept [];
   shelfLifeStorage : ProductShelfLife [];
   manufacturer : Reference [];
   characteristic : PackagedProductDefinition_Characteristic [];
   containedItem : PackagedProductDefinition_ContainedItem [];
   package : PackagedProductDefinition_Package [];
}
