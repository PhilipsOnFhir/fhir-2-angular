import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MeasureReport_Population      extends R4_1_BackboneElement
{

   static def : string = 'MeasureReport_Population';
   code : R4_1_CodeableConcept ;
   count : string ;
   subjectResults : R4_1_Reference ;
}
