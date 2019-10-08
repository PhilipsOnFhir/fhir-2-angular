import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Coverage_Grouping      extends STU3_BackboneElement
{

   static def : string = 'Coverage_Grouping';
   group : string ;
   groupDisplay : string ;
   subGroup : string ;
   subGroupDisplay : string ;
   plan : string ;
   planDisplay : string ;
   subPlan : string ;
   subPlanDisplay : string ;
   class : string ;
   classDisplay : string ;
   subClass : string ;
   subClassDisplay : string ;
}
