import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Period } from './R5_Period'

export class R5_DataRequirement_DateFilter      extends R5_Element
{

   static def : string = 'DataRequirement_DateFilter';
   path : string ;
   searchParam : string ;
   valueDateTime : string ;
   valuePeriod : R5_Period ;
   valueDuration : string ;
}
