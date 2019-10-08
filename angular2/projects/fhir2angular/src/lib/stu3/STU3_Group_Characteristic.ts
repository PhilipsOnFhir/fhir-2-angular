import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'

export class STU3_Group_Characteristic      extends STU3_BackboneElement
{

   static def : string = 'Group_Characteristic';
   code : STU3_CodeableConcept ;
   valueCodeableConcept : STU3_CodeableConcept ;
   valueBoolean : boolean ;
   valueQuantity : STU3_Quantity ;
   valueRange : STU3_Range ;
   exclude : boolean ;
   period : STU3_Period ;
}
