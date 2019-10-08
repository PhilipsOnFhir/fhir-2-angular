import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProduct_SpecialDesignation      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProduct_SpecialDesignation';
   identifier : R4_1_Identifier [];
   type : R4_1_CodeableConcept ;
   intendedUse : R4_1_CodeableConcept ;
   indicationCodeableConcept : R4_1_CodeableConcept ;
   indicationReference : R4_1_Reference ;
   status : R4_1_CodeableConcept ;
   date : string ;
   species : R4_1_CodeableConcept ;
}
