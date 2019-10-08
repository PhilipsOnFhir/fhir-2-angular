import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExpansionProfile_Designation2 } from './STU3_ExpansionProfile_Designation2'

export class STU3_ExpansionProfile_Exclude      extends STU3_BackboneElement
{

   static def : string = 'ExpansionProfile_Exclude';
   designation : STU3_ExpansionProfile_Designation2 [];
}
