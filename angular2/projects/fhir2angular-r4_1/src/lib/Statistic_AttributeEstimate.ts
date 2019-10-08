import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Statistic_EstimateQualifier } from './Statistic_EstimateQualifier'

export class Statistic_AttributeEstimate      extends BackboneElement
{

   static def : string = 'Statistic_AttributeEstimate';
   description : string ;
   note : Annotation [];
   type : CodeableConcept ;
   quantity : Quantity ;
   level : string ;
   range : Range ;
   estimateQualifier : Statistic_EstimateQualifier [];
}
