import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Procedure_FocalDevice      extends R4_1_BackboneElement
{

   static def : string = 'Procedure_FocalDevice';
   action : R4_1_CodeableConcept ;
   manipulated : R4_1_Reference ;
}
