import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'

export class R4_UsageContext      extends R4_Element
{

   static def : string = 'UsageContext';
   code : R4_Coding ;
   valueCodeableConcept : R4_CodeableConcept ;
   valueQuantity : R4_Quantity ;
   valueRange : R4_Range ;
   valueReference : R4_Reference ;
}
