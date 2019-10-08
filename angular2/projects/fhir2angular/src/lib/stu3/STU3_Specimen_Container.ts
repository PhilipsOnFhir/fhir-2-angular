import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Specimen_Container      extends STU3_BackboneElement
{

   static def : string = 'Specimen_Container';
   identifier : STU3_Identifier [];
   description : string ;
   type : STU3_CodeableConcept ;
   capacity : STU3_Quantity ;
   specimenQuantity : STU3_Quantity ;
   additiveCodeableConcept : STU3_CodeableConcept ;
   additiveReference : STU3_Reference ;
}
