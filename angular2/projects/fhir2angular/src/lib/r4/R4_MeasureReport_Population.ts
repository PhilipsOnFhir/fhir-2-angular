import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_MeasureReport_Population      extends R4_BackboneElement
{

   static def : string = 'MeasureReport_Population';
   code : R4_CodeableConcept ;
   count : string ;
   subjectResults : R4_Reference ;
}
