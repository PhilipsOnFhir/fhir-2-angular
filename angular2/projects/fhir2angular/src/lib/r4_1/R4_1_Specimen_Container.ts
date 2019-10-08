import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Specimen_Container      extends R4_1_BackboneElement
{

   static def : string = 'Specimen_Container';
   identifier : R4_1_Identifier [];
   description : string ;
   type : R4_1_CodeableConcept ;
   capacity : R4_1_Quantity ;
   specimenQuantity : R4_1_Quantity ;
   additiveCodeableConcept : R4_1_CodeableConcept ;
   additiveReference : R4_1_Reference ;
}
