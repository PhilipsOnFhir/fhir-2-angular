import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProduct_SpecialDesignation      extends R4_BackboneElement
{

   static def : string = 'MedicinalProduct_SpecialDesignation';
   identifier : R4_Identifier [];
   type : R4_CodeableConcept ;
   intendedUse : R4_CodeableConcept ;
   indicationCodeableConcept : R4_CodeableConcept ;
   indicationReference : R4_Reference ;
   status : R4_CodeableConcept ;
   date : string ;
   species : R4_CodeableConcept ;
}
