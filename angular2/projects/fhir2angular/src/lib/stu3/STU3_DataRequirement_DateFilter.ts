import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Period } from './STU3_Period'

export class STU3_DataRequirement_DateFilter      extends STU3_Element
{

   static def : string = 'DataRequirement_DateFilter';
   path : string ;
   valueDateTime : string ;
   valuePeriod : STU3_Period ;
   valueDuration : string ;
}
