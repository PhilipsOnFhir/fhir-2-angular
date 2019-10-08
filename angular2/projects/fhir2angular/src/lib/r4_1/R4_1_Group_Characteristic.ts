import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Group_Characteristic      extends R4_1_BackboneElement
{

   static def : string = 'Group_Characteristic';
   code : R4_1_CodeableConcept ;
   valueCodeableConcept : R4_1_CodeableConcept ;
   valueBoolean : boolean ;
   valueQuantity : R4_1_Quantity ;
   valueRange : R4_1_Range ;
   valueReference : R4_1_Reference ;
   exclude : boolean ;
   period : R4_1_Period ;
}
