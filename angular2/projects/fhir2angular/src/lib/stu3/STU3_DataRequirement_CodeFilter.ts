import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DataRequirement_CodeFilter      extends STU3_Element
{

   static def : string = 'DataRequirement_CodeFilter';
   path : string ;
   valueSetString : string ;
   valueSetReference : STU3_Reference ;
   valueCode : string [];
   valueCoding : STU3_Coding [];
   valueCodeableConcept : STU3_CodeableConcept [];
}
