import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_ExplanationOfBenefit_Procedure      extends R4_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Procedure';
   sequence : string ;
   type : R4_CodeableConcept [];
   date : string ;
   procedureCodeableConcept : R4_CodeableConcept ;
   procedureReference : R4_Reference ;
   udi : R4_Reference [];
}
