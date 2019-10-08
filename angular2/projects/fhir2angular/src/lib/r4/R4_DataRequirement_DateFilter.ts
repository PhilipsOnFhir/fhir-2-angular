import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Period } from './R4_Period'

export class R4_DataRequirement_DateFilter      extends R4_Element
{

   static def : string = 'DataRequirement_DateFilter';
   path : string ;
   searchParam : string ;
   valueDateTime : string ;
   valuePeriod : R4_Period ;
   valueDuration : string ;
}
