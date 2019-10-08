import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class MedicinalProductDefinition_SpecialDesignation      extends BackboneElement
{

   static def : string = 'MedicinalProductDefinition_SpecialDesignation';
   identifier : Identifier [];
   type : CodeableConcept ;
   intendedUse : CodeableConcept ;
   indicationCodeableConcept : CodeableConcept ;
   indicationReference : Reference ;
   status : CodeableConcept ;
   date : string ;
   species : CodeableConcept ;
}
