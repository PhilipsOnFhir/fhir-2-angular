import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Statistic_AttributeEstimate } from './Statistic_AttributeEstimate'
import { Statistic_SampleSize } from './Statistic_SampleSize'

export class Statistic      extends BackboneElement
{

   static def : string = 'Statistic';
   description : string ;
   note : Annotation [];
   statisticType : CodeableConcept ;
   quantity : Quantity ;
   sampleSize : Statistic_SampleSize ;
   attributeEstimate : Statistic_AttributeEstimate [];
}
