import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'

export class R5_Group_Characteristic      extends R5_BackboneElement
{

   static def : string = 'Group_Characteristic';
   code : R5_CodeableConcept ;
   valueCodeableConcept : R5_CodeableConcept ;
   valueBoolean : boolean ;
   valueQuantity : R5_Quantity ;
   valueRange : R5_Range ;
   valueReference : R5_Reference ;
   exclude : boolean ;
   period : R5_Period ;
}
