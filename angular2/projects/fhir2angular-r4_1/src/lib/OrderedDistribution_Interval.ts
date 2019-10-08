import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Statistic } from './Statistic'

export class OrderedDistribution_Interval      extends BackboneElement
{

   static def : string = 'OrderedDistribution_Interval';
   rankOrder : string ;
   intervalStatistic : Statistic [];
}
