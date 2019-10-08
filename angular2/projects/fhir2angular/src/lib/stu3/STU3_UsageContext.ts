import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'

export class STU3_UsageContext      extends STU3_Element
{

   static def : string = 'UsageContext';
   code : STU3_Coding ;
   valueCodeableConcept : STU3_CodeableConcept ;
   valueQuantity : STU3_Quantity ;
   valueRange : STU3_Range ;
}
