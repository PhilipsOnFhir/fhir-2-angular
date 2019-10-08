import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_DataRequirement_DateFilter      extends R4_1_Element
{

   static def : string = 'DataRequirement_DateFilter';
   path : string ;
   searchParam : string ;
   valueDateTime : string ;
   valuePeriod : R4_1_Period ;
   valueDuration : string ;
}
