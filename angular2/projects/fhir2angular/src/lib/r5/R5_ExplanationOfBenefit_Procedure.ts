import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_ExplanationOfBenefit_Procedure      extends R5_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Procedure';
   sequence : string ;
   type : R5_CodeableConcept [];
   date : string ;
   procedureCodeableConcept : R5_CodeableConcept ;
   procedureReference : R5_Reference ;
   udi : R5_Reference [];
}
