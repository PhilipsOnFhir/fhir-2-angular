import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'

export class Statistic_EstimateQualifier      extends BackboneElement
{

   static def : string = 'Statistic_EstimateQualifier';
   description : string ;
   note : Annotation [];
   type : CodeableConcept ;
   quantity : Quantity ;
   level : string ;
   range : Range ;
}
