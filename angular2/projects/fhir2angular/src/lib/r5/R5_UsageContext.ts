import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'

export class R5_UsageContext      extends R5_Element
{

   static def : string = 'UsageContext';
   code : R5_Coding ;
   valueCodeableConcept : R5_CodeableConcept ;
   valueQuantity : R5_Quantity ;
   valueRange : R5_Range ;
   valueReference : R5_Reference ;
}
