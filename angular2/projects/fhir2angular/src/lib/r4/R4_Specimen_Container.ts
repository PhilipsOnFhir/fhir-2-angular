import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_Specimen_Container      extends R4_BackboneElement
{

   static def : string = 'Specimen_Container';
   identifier : R4_Identifier [];
   description : string ;
   type : R4_CodeableConcept ;
   capacity : R4_Quantity ;
   specimenQuantity : R4_Quantity ;
   additiveCodeableConcept : R4_CodeableConcept ;
   additiveReference : R4_Reference ;
}
