import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProduct_SpecialDesignation      extends R5_BackboneElement
{

   static def : string = 'MedicinalProduct_SpecialDesignation';
   identifier : R5_Identifier [];
   type : R5_CodeableConcept ;
   intendedUse : R5_CodeableConcept ;
   indicationCodeableConcept : R5_CodeableConcept ;
   indicationReference : R5_Reference ;
   status : R5_CodeableConcept ;
   date : string ;
   species : R5_CodeableConcept ;
}
