import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'

export class R4_Group_Characteristic      extends R4_BackboneElement
{

   static def : string = 'Group_Characteristic';
   code : R4_CodeableConcept ;
   valueCodeableConcept : R4_CodeableConcept ;
   valueBoolean : boolean ;
   valueQuantity : R4_Quantity ;
   valueRange : R4_Range ;
   valueReference : R4_Reference ;
   exclude : boolean ;
   period : R4_Period ;
}
