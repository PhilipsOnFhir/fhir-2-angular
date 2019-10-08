import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Condition_Stage      extends R4_BackboneElement
{

   static def : string = 'Condition_Stage';
   summary : R4_CodeableConcept ;
   assessment : R4_Reference [];
   type : R4_CodeableConcept ;
}
