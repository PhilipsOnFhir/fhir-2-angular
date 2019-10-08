import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'

export class STU3_ModuleDefinition_DateFilter      extends STU3_BackboneElement
{

   static def : string = 'ModuleDefinition_DateFilter';
   path : string ;
   valueDateTime : string ;
   valuePeriod : STU3_Period ;
}
