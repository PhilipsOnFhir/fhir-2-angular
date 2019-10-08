import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_UsageContext      extends R4_1_Element
{

   static def : string = 'UsageContext';
   code : R4_1_Coding ;
   valueCodeableConcept : R4_1_CodeableConcept ;
   valueQuantity : R4_1_Quantity ;
   valueRange : R4_1_Range ;
   valueReference : R4_1_Reference ;
}
