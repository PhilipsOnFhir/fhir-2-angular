import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_Specimen_Container      extends R5_BackboneElement
{

   static def : string = 'Specimen_Container';
   identifier : R5_Identifier [];
   description : string ;
   type : R5_CodeableConcept ;
   capacity : R5_Quantity ;
   specimenQuantity : R5_Quantity ;
   additiveCodeableConcept : R5_CodeableConcept ;
   additiveReference : R5_Reference ;
}
