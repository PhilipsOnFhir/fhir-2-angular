import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Condition_Stage      extends STU3_BackboneElement
{

   static def : string = 'Condition_Stage';
   summary : STU3_CodeableConcept ;
   assessment : STU3_Reference [];
}
