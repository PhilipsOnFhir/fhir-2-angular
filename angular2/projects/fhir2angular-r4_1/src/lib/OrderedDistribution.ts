import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { OrderedDistribution_Interval } from './OrderedDistribution_Interval'
import { Quantity } from './Quantity'

export class OrderedDistribution      extends BackboneElement
{

   static def : string = 'OrderedDistribution';
   description : string ;
   note : Annotation [];
   numberOfIntervals : string ;
   bottomOfFirstInterval : Quantity ;
   interval : OrderedDistribution_Interval [];
   topOfInterval : Quantity ;
}
