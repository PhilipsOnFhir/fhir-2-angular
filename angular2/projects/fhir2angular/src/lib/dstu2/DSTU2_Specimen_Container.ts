import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Specimen_Container      extends DSTU2_BackboneElement
{

   static def : string = 'Specimen_Container';
   identifier : DSTU2_Identifier [];
   description : string ;
   type : DSTU2_CodeableConcept ;
   capacity : DSTU2_SimpleQuantity ;
   specimenQuantity : DSTU2_SimpleQuantity ;
   additiveCodeableConcept : DSTU2_CodeableConcept ;
   additiveReference : DSTU2_Reference ;
}
