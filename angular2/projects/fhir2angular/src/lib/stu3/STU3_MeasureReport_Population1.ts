import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MeasureReport_Population1      extends STU3_BackboneElement
{

   static def : string = 'MeasureReport_Population1';
   identifier : STU3_Identifier ;
   code : STU3_CodeableConcept ;
   count : string ;
   patients : STU3_Reference ;
}
