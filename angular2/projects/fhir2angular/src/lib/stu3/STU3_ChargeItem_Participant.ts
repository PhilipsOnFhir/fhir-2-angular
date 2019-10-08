import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ChargeItem_Participant      extends STU3_BackboneElement
{

   static def : string = 'ChargeItem_Participant';
   role : STU3_CodeableConcept ;
   actor : STU3_Reference ;
}
